/*
UI components that overlay the camera view.
*/

'use strict'

import React, { Component } from 'react';
import {Accelerometer, Gyroscope, Magnetometer} from 'NativeModules';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  DeviceEventEmitter //emit events for accelerometer and gyroscope data
} from 'react-native';

export default class Overlays extends Component {
  constructor(props) {
	  super(props);
	  this.state = {items: [{id: 1, name: 'item1', top: 20}, {id: 2, name: 'item2', top: 40}]};
	}

  componentDidMount() {
	  Gyroscope.setGyroUpdateInterval(0.1); // in seconds
	  DeviceEventEmitter.addListener('GyroData', (data) => {
	    /**
		  * data.rotationRate.x
		  * data.rotationRate.y
		  * data.rotationRate.z
	    **/
	    var itemArray = this.state.items
	    var len = itemArray.length
	    for (var i = 0; i < len; i++) {
	    	itemArray[i].top += data.rotationRate.x * 10
	    }
	    this.setState({items: itemArray})
	  });
	  Gyroscope.startGyroUpdates(); // you'll start getting AccelerationData events above
  }

  render() {

		//gets the custom style for each time
		var getStyle = function(item) {
			return (
				{
					top: item.top
				}
			)
		}

		//ng-repeat over all overlay items (get items using Firebase)
		var listItems = this.state.items.map(function(item) {
		  return (
		    <Text key={item.id} style={getStyle(item)}>{item.name}</Text>
		  )
		})

		return (
		  <View style={styles.container}>
		      {listItems}
		  </View>
		);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
    // floatView: { // this is where the overlays are going to be
    //     position: 'absolute',
    //     width: 100,
    //     height: 100,
    //     top: 50,
    //     left: 40,
});

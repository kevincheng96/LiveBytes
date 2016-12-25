/*
UI components that overlay the camera view.
*/

'use strict'

import React, { Component } from 'react';
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
	  this.items = [{id: 1, name: 'item1', top: 20}, {id: 2, name: 'item2', top: 40}];
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
		var listItems = this.items.map(function(item) {
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
  },
  overlay: {
  	top: 50,
  	left: 40
  }
    // floatView: { // this is where the overlays are going to be
    //     position: 'absolute',
    //     width: 100,
    //     height: 100,
    //     top: 50,
    //     left: 40,
});

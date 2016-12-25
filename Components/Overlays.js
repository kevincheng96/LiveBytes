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
  render() {
		//ng-repeat over all overlay items (get items using Firebase)
		// var listItems = this.props.items.map(function(item) {
		//   return (
		//     <li key={item.name} style={getStyle(item)}>
		//       <a href={item.link}>{item.name}</a>
		//     </li>
		//   )
		// })

    return (
      <View style={styles.container}>
          <Text style={styles.overlay}>This is an overlay</Text>
      </View>
    );
  }

	//gets the custom style for each tiem
	getStyle(item) {
		return (
			{
				top: item.top
			}
		)
	}

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
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

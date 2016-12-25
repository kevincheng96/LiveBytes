/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import Camera from 'react-native-camera';
import Overlays from './Components/Overlays.js';
import {Accelerometer, Gyroscope, Magnetometer} from 'NativeModules';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  DeviceEventEmitter //emit events for accelerometer and gyroscope data
} from 'react-native';

      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu

export default class livebytes extends Component {
  constructor(props) {
    super(props);
    this.state = {cameraType: Camera.constants.Type.back};
  }
  
  // <TouchableHighlight style={styles.highlight}>
    //   <Text>Flip</Text>
  // </TouchableHighlight>
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref='cam'
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
        <View style={styles.floatView}>
          <Overlays></Overlays>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  floatView: { // this is where the overlays are going to be
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  highlight: {
    justifyContent: 'flex-end'
  }
});

AppRegistry.registerComponent('livebytes', () => livebytes);

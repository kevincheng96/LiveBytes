/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import Camera from 'react-native-camera';
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

  componentDidMount() {
    Accelerometer.setAccelerometerUpdateInterval(0.1); // in seconds
    console.log('test')
    DeviceEventEmitter.addListener('AccelerationData', function (data) {
      /**
      * data.acceleration.x
      * data.acceleration.y
      * data.acceleration.z
      **/
      console.log('acceleration x is')
      console.log(data.acceleration.x)
    });
    Accelerometer.startAccelerometerUpdates(); // you'll start getting AccelerationData events above
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref='cam'
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
        <TouchableHighlight style={styles.highlight}>
          <Text>Flip</Text>
        </TouchableHighlight>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  highlight: {
    justifyContent: 'flex-end'
  }
});

AppRegistry.registerComponent('livebytes', () => livebytes);

/* Splash page for start screen
*/

import React, { Component } from 'react'
import { AppRegistry, Image, View } from 'react-native'

class StartScreen extends Component {
  render() {
    let pic = {
      uri: 't'
    };
    return(

      <View style = {{

        flex: 1,
        flexDirection: 'column'
        justifyContent: 'center'
        alightItems: 'center'
      }}>
      <Image source = {pic} /> <VIEW />
      );
  }
};

AppRegistry.registerComponent('StartScreen', () => StartScreen)

/* Splash page for start screen
*/

import React, { Component } from 'react'
import { AppRegistry, Image, View } from 'react-native'

export default class StartScreen extends Component {
	render() {
		const pic = {
			uri: 'http://images.clipartpanda.com/school-bus-driver-quotes-5047_school_bus_with_happy_children.png'
		};
		return(
				<View style = {{	
					flex: 1,
					flexDirection: 'column'
					justifyContent: 'center'
					alighnItems: 'center'
					}}>
				<Image source = {pic} /> 
				</View>
			}
		};

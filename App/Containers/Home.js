import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import Styles from './Styles/HomeStyle'
import FontStyles from '../Themes//Font'


export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  navigateToScreen (screenName, params) {
    this.props.navigation.navigate(screenName, {params})
  }

  render () {
    return (
      <View style={Styles.container}>
        <Text style={[FontStyles.h1, {alignSelf: 'center'}]}>Selamat datang</Text>

        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            style={Styles.button1}
            onPress={() => this.navigateToScreen('User')}
          >
            <Text style={FontStyles.button}>User</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            style={Styles.button1}
            onPress={() => this.navigateToScreen('Custom')}
          >
            <Text style={FontStyles.button}>Custom</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
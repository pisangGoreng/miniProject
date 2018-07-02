import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Custom extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{textAlign: 'center', lineHeight: 30, fontSize: 18}}>Sedang dalam perbaikan, {`\n`} Terimakasih.</Text>
      </View>
    )
  }
}


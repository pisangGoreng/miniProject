import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../Redux/Store'
import PrimaryNav from '../Navigation/AppNavigation'

export default class App extends Component {
  render() {
    console.disableYellowBox = true
    return (
        <Provider store={store}>
          <PrimaryNav />
        </Provider>
    )
  }
}

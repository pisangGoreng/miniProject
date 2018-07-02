import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {connect} from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Spinner from 'react-native-loading-spinner-overlay'

import Styles from './Styles/UserStyle'
import FontStyles from '../Themes/Font'
import {requestUserDataThunk} from '../Redux/Thunks'

let imageUrl = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/06382018064471.562c33b03b564.jpg'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      spinnerVisible: true,
      dataUser: [],
      activeTabs: 'tab1'
    }
  }

  componentWillMount() {
    this.props.requestUserDataThunk()
  }

  componentWillReceiveProps (newProps) {
    let {isFetching, error, dataUser} = newProps.UserReducer
    if (!isFetching && error === null) {
      this.assignValue('dataUser', dataUser)
      this.assignValue('spinnerVisible')
    }
  }

  renderItem (items) {
    return (
      <View style={{marginBottom: 70}}>
        {
          items.map((item, index) => {
            return (
              <View style={Styles.itemContainer}>
                <View style={Styles.imageBox}>
                  <Image style={Styles.image} source={{uri: imageUrl}} />
                </View>

                <View style={Styles.contentBox}>
                  <Text>Id: {item._id}</Text>
                  <Text>Nama: {item.name}</Text>
                  <Text>Umur: {item.age}</Text>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }

  filterUsersByAge (users, minAge, maxAge) {
    let filteredUsers = users.filter((user) => {
      return user.age >= minAge && user.age <= maxAge
    })

    return filteredUsers
  }

  renderContent () {
    let {activeTabs, dataUser} = this.state
    let items = []
    let title = ''

    switch (activeTabs) {
      case 'tab1':
        items = dataUser
        title = 'Semua Data'  
        break;
    
      case 'tab2':
        items = this.filterUsersByAge(dataUser, 15, 25)
        title = 'Mencari Ilmu'  
        break;

      case 'tab3':
        items = this.filterUsersByAge(dataUser, 25, 35)
        title = 'Mencari Pengalaman'  
        break;

      case 'tab4':
        items = this.filterUsersByAge(dataUser, 35, 40)
        title = 'Berpengalaman'  
        break;

      default:
        break;
    }

    return (
      <KeyboardAwareScrollView>
        <View style={{width: '100%', paddingHorizontal: 10}}>
          <Text style={[FontStyles.h1, {alignSelf: 'center'}]}>{title}</Text>
          { this.renderItem(items) }
        </View>
      </KeyboardAwareScrollView>
    )
  }

  assignValue(name, value) {
    let {spinnerVisible} = this.state
    switch (name) {
      case 'spinnerVisible':
        this.setState({spinnerVisible: !spinnerVisible})
        break
      
      case 'dataUser':
        this.setState({dataUser: value})
        break
      
      case 'activeTabs':
        this.setState({activeTabs: value})
        break
    
      default:
        break;
    }
  }

  render () {
    let {spinnerVisible, dataUser} = this.state
    console.tron.log([this.state])
    return (
      <View style={Styles.container}>
        <Spinner visible={spinnerVisible} />
        <View style={{flex: 10}}>
          {
            dataUser.length !== 0
            ? this.renderContent()
            : null
          }
        </View>

        <View style={Styles.tabBarContainer}>
          <TouchableOpacity style={Styles.tabBarButton} onPress={() => this.assignValue('activeTabs', 'tab1')}>
            <Text>Tab 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.tabBarButton} onPress={() => this.assignValue('activeTabs', 'tab2')}>
            <Text>Tab 2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.tabBarButton} onPress={() => this.assignValue('activeTabs', 'tab3')}>
            <Text>Tab 3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.tabBarButton} onPress={() => this.assignValue('activeTabs', 'tab4')}>
            <Text>Tab 4</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    UserReducer: state.UserReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestUserDataThunk: () => dispatch(requestUserDataThunk())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(User)
import {StackNavigator} from 'react-navigation'

// screens identified by the router
import Home from '../Containers/Home'
import User from '../Containers/User'
import Custom from '../Containers/Custom'

const PrimaryNav = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    User: {
      screen: User,
    },
    Custom: {
      screen: Custom,
    },
  }, 
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);


export default PrimaryNav

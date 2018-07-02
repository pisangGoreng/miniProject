import {StyleSheet} from 'react-native'
import Colors from '../../Themes/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.gray,
  },
  tabBarContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    height: 60
  },
  tabBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContainer: {
    width: '100%',
    height: 90,
    // backgroundColor: 'blue',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.torque,
    flexDirection: 'row'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageBox: {
    flex: 1,
    padding: 5
  },
  contentBox: {
    flex: 3,
    padding: 5
  }
});

export default styles
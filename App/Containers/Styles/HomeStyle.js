import {StyleSheet} from 'react-native'
import Colors from '../../Themes/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.gray,
  },
  button1: {
    backgroundColor: Colors.bloodOrange,
    flex: 1,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 40,
    marginHorizontal: 20,
    marginTop: 20
  }
});

export default styles
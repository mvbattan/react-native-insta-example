import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').width,
    maxWidth: Dimensions.get('window').width
  },
  heartContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;

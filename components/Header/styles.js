import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    maxHeight: 150
  },
  logo: {
    maxHeight: 40,
    maxWidth: Dimensions.get('window').width,
    zIndex: 5
  }
});

export default styles;

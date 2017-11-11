import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  content: {
    maxHeight: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flex: 1
  }
});

export default styles;

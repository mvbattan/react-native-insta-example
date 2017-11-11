import { StyleSheet } from 'react-native';

const width = 50;
const height = 80;

const midHeart = {
  width,
  height,
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  position: 'absolute',
  backgroundColor: 'red'
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height,
    width,
  },
  heartRight: {
    ...midHeart,
    transform: [{ rotate: '-45deg' }],
    right: -14,
  },
  heartLeft: {
    ...midHeart,
    transform: [{ rotate: '45deg' }],
    left: -14,
  }
});

export default styles;

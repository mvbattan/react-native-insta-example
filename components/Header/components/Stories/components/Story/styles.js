import { StyleSheet } from 'react-native';

const storySize = 60;
const storyStyle = {
  width: storySize,
  height: storySize,
  borderRadius: storySize / 2,
  marginHorizontal: 20
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  background: {
    ...storyStyle
  },
  story: {
    ...storyStyle,
    position: 'absolute',
    transform: [{ scale: 0.9 }]
  },
  name: {
    color: 'black',
    marginTop: 7,
    fontSize: 12
  }
});

export default styles;

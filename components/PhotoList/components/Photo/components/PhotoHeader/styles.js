import { StyleSheet } from 'react-native';

const profilePhotoSize = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row'
  },
  profilePhoto: {
    width: profilePhotoSize,
    height: profilePhotoSize,
    borderRadius: profilePhotoSize / 2,
    marginHorizontal: 10
  },
  profileName: {
    fontWeight: 'bold',
    color: '#5851D8'
  }
});

export default styles;

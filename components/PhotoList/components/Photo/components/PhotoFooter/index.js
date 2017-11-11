import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import LikeButton from '../../../../../LikeButton'
import styles from './styles';

function PhotoFooter({ onPress }) {
  return (
    <View style={styles.container}>
      <LikeButton size={0.35} onPress={onPress} />
    </View>
  );
}

PhotoFooter.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default PhotoFooter;

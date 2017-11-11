import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, BackgroundImage } from 'react-native';

import background from '../../../../../../assets/instagram_story_background.png';
import styles from './styles';

function Story({ thumbnail, name }) {
  return (
    <View style={styles.container}>
      <Image source={background} style={styles.background} />
      <Image source={thumbnail} style={styles.story} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

Story.propTypes = {
  thumbnail: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Story;

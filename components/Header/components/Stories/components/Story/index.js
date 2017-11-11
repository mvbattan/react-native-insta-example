import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import background from '../../../../../../assets/instagram_story_background.png';
import styles from './styles';

function Story({ thumbnail, name }) {
  return (
    null
  );
}

Story.propTypes = {
  thumbnail: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Story;

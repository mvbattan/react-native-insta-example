import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import fbLogo from '../../../../../../assets/fb_logo.png';

import styles from './styles';

function PhotoHeader() {
  return (
    <View style={styles.container}>
      <Image source={fbLogo} resizeMode="contain" style={styles.profilePhoto} />
      <Text style={styles.profileName}>Facebook Dev Circle RN Workshop</Text>
    </View>
  );
}

export default PhotoHeader;

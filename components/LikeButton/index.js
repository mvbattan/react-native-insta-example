import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';

class LikeButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View>
          <View style={styles.heartLeft} />
          <View style={styles.heartRight} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default LikeButton;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Animated } from 'react-native';

import PhotoHeader from './components/PhotoHeader';
import PhotoFooter from './components/PhotoFooter';
import LikeButton from '../../../LikeButton';

import styles from './styles';

class Photo extends Component {
  state = { bigHeartSize: new Animated.Value(0) }

  animateHeart = size => {
    return Animated.timing(
      this.state.bigHeartSize,
      {
        toValue: size,
        duration: 150,
        useNativeDriver: true
      }
    );
  }

  handlePress = () => {
    Animated.sequence([
      this.animateHeart(1.5),
      Animated.delay(300),
      this.animateHeart(0)
    ]).start();
  }

  heartStyle = {
    transform: [{
      scale: this.state.bigHeartSize
    }],
    backgroundColor: 'blue'
  }

  render() {
    const { source } = this.props;
    return (
      <View>
        <PhotoHeader />
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={source} style={styles.container} resizeMode="cover" />
          <Animated.View style={[this.heartStyle, styles.heartContainer]}>
            <LikeButton size={1} style={{ position: 'absolute' }} />
          </Animated.View>
        </View>
        <PhotoFooter onPress={this.handlePress} />
      </View>
    );
  }
}

Photo.propTypes = {
  source: PropTypes.number.isRequired
}

export default Photo;

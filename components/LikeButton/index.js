import React, { Component } from 'react';
import { View, TouchableOpacity, Animated, Easing } from 'react-native';

import styles from './styles';

class LikeButton extends Component {
  state = { heartScale: new Animated.Value(0), heartColor: new Animated.Value(0) };

  heartBounce = toValue => {
    return Animated.spring(this.state.heartScale, {
      toValue,
      useNativeDriver: true,
      friction: 3
    });
  }

  heartFillColor = toValue => {
    return Animated.timing(this.state.heartColor, {
      toValue,
      easing: Easing.quads
    });
  }

  animateHeart = () => {
    Animated.parallel([
      this.heartBounce(1),
      this.heartFillColor(1)
    ]).start(
      () => this.state.heartScale.setValue(0)
    );
  }

  handlePress = () => {
    this.animateHeart();
    return this.props.onPress && this.props.onPress();
  }

  heartContainerStyle = {
    transform: [
      {
        scale: this.state.heartScale.interpolate({
          inputRange: [0, 0.1, 1],
          outputRange: [1, 0.5, 1]
        })
      }
    ]
  }

  heartColorStyle = {
    backgroundColor: this.state.heartColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(200,200,200,1)', 'rgba(255,0,0,1)']
    })
  }

  render() {
    const { size, style } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress} style={[styles.container, { transform: [{ scale: size }]}, style]}>
        <Animated.View style={this.heartContainerStyle}>
          <Animated.View style={[styles.heartLeft, this.heartColorStyle]} />
          <Animated.View style={[styles.heartRight, this.heartColorStyle]} />
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export default LikeButton;

import React from 'react';
import { View, Image, Animated } from 'react-native';

import instagramLogo from '../../assets/instagram_logo.png';

import Stories from './components/Stories';
import styles from './styles';

const headerTransform = scrolledAmount => ({
  height: scrolledAmount.interpolate({
    inputRange: [0, 50, 100, 150, 200, 250],
    outputRange: [100, 100, 50, 25, 15, 0],
    extrapolate: 'clamp'
  })
});

function Header({ scrolledAmount }) {
  return (
    <Animated.View style={styles.container}>
      <View style={[styles.logo, { backgroundColor: 'white' }]}>
        <Image source={instagramLogo} resizeMode="contain" style={styles.logo} />
      </View>
      <Stories heightStyle={headerTransform(scrolledAmount)} />
    </Animated.View>
  );
}

export default Header;

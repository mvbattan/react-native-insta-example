import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import LikeButton from './components/LikeButton';
 
class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <LikeButton size={1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default App;

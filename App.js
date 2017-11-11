import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import LikeButton from './components/LikeButton';
import PhotoList from './components/PhotoList';
import Header from './components/Header';
 
class App extends Component {
  state = { scrolledAmount: new Animated.Value(0) }

  handleScroll = Animated.event([
    { nativeEvent: { contentOffset: { y: this.state.scrolledAmount } }},
  ])

  render() {
    return (
      <View style={styles.container}>
        <Header scrolledAmount={this.state.scrolledAmount} />
        <PhotoList onScroll={this.handleScroll} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default App;

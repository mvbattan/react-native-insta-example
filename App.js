import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
 
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Insert components here !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default App;

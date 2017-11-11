import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import landscape from '../../assets/lrargerich_landscape.jpg';
import mountain from '../../assets/natgeo_mountain.jpg';
import spring from '../../assets/debihaden_spring.jpg';

import Photo from './components/Photo';
import styles from './styles';

const data = [
  { source: landscape },
  { source: spring },
  { source: mountain }
];

class PhotoList extends Component {
  renderItem = ({ item }) => <Photo {...item} />
  keyExtractor = item => item.source;

  render() {
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        alwaysBounceHorizontal={false}
        scrollEventThrottle={16}
        onScroll={this.props.onScroll}
      />
    );
  }
}

export default PhotoList;

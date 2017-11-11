import React from 'react';
import { ScrollView, Image, Animated } from 'react-native';

import plini from '../../../../assets/plini_sweet_nothings.jpg';
import mark from '../../../../assets/mark_zuckerberg.jpg';
import pepe from '../../../../assets/pepe_argento.jpg';
import darth from '../../../../assets/darth_vader.jpg';
import jaina from '../../../../assets/jaina_proudmoore.jpg';

import Story from './components/Story';
import styles from './styles';

const stories = [
  { thumbnail: mark, name: 'Mark' },
  { thumbnail: plini, name: 'Plini' },
  { thumbnail: pepe, name: 'Pepe' },
  { thumbnail: darth, name: 'Darth' },
  { thumbnail: jaina, name: 'Jaina' }
];

function Stories({ heightStyle }) {
  return (
    <Animated.View style={heightStyle}>
      <ScrollView
        contentContainerStyle={styles.content}
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        {stories.map((story, index) => <Story {...story} key={index} />)}
      </ScrollView>
    </Animated.View>
  );
}

export default Stories;

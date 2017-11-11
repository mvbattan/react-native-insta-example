import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import PhotoHeader from './components/PhotoHeader';
import PhotoFooter from './components/PhotoFooter';
import LikeButton from '../../../LikeButton';

import styles from './styles';

class Photo extends Component {
  render() {
    const { source } = this.props;
    return (
      null
    );
  }
}

Photo.propTypes = {
  source: PropTypes.number.isRequired
}

export default Photo;

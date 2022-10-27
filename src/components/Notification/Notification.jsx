import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return <p>{this.props.message}</p>;
  }
}

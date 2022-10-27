import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, HeadContainer, ContainerButton } from './FeedbackStyled';

export default class Feedbacks extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    changeState: PropTypes.func.isRequired,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { options, changeState } = this.props;
    return (
      <HeadContainer>
        <h2>Please leave feedback</h2>
        <ContainerButton>
          {options.map((option, idx) => (
            <Button data-type={option} onClick={changeState} key={idx}>
              {this.capitalizeFirstLetter(option)}
            </Button>
          ))}
        </ContainerButton>
      </HeadContainer>
    );
  }
}

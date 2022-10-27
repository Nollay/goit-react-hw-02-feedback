import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';

class FeedbackStats extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    goodPercentage: PropTypes.number.isRequired,
  };
  render() {
    const { good, neutral, bad, total, goodPercentage } = this.props;

    return total ? (
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {goodPercentage}%</p>
      </div>
    ) : (
      <Notification message="No feedback is given" />
    );
  }
}
export default FeedbackStats;

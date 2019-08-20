import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => {
  <h1>
    <span className="forecast-summary__date">{props.date}</span>,
    <span className="forecast-summary__temperature">{props.temperature}</span>,
    <span className="forecast-summary__description">{props.description}</span>,
    <span className="forecast-summary__icon">{props.icon}</span>,
  </h1>
};

ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;

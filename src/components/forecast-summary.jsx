import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <h4>
    <div>
      <span className="forecast-summary__date">{props.date}</span>
    </div>
    <div>
      <span className="forecast-summary__icon">{props.icon}</span>
    </div>
    <div>
      <span className="forecast-summary__temperature">{props.temperature}</span>
    </div>
    <div>
      <span className="forecast-summary__description">{props.description}</span>
    </div>
  </h4>
);

ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ForecastSummary;

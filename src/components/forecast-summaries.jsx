import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './forecast-summary';
import App from './app';
import '../styles/forecast-summaries.scss';
import '../styles/location-details.scss';

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
      props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
          onForecastSelect={props.handleForecastSelect}
        />
      ))
    }
  </div>
);

ForecastSummaries.propTypes = {
  onForecastSelect: PropTypes.string.isRequired,
};

export default ForecastSummaries;

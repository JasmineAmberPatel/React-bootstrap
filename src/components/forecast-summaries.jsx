import React from 'react';
import ForecastSummary from './forecast-summary';
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


export default ForecastSummaries;

import React from 'react';
import ForecastSummary from './forecast-summary';
import '../styles/app.scss';

const ForecastSummaries = props => (
  <h4 className="forecast-summaries">
    {
      props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
          onForecastSelect={props.onForecastSelect}
        />
      ))
    }
  </h4>
);

export default ForecastSummaries;

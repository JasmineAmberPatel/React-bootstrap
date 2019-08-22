import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';

const WeatherComponent = (props) => {
  return (
    <div>
      <weatherIcon name="own" iconId="200" flip="horizontal" rotate="90" />
    </div>
  );
};

const ForecastSummary = props => (
  <h4>
    <div className="forecast-summary__date">
      <span> {Moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="forecast-summary__icon">
      <WeatherIcon name="owm" iconId={props.icon} />
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

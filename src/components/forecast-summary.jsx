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
  <div>
    <h4 className="weather-box">
      <div className="date">
        <span> {Moment(props.date).format('ddd Do MMM')}</span>
      </div>
      <div className="icon">
        <WeatherIcon name="owm" iconId={props.icon} />
      </div>
      <div>
        <span className="temperature">{props.temperature}°C</span>
      </div>
      <div>
        <span className="description">{props.description}</span>
      </div>
    </h4>
    <div>
      <button className="more-details-button" onClick={() => props.onForecastSelect(props.date)}>More details</button>
    </div>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;

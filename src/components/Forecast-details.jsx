import React from 'react';
import Moment from 'moment';

const ForecastDetails = props => {
  return (
    <div>
      <div className="forecast-details__date">
        <span> {Moment(props.forecast.date).format('ddd Do MMM')}</span>
      </div>
      <div className="forecast-details__temperature-min">
      Minimum Temperature: {props.forecast.temperature.min}
      </div>
      <div className="forecast-details__temperature-max">
      Maximum Temperature: {props.forecast.temperature.max}
      </div>
      <div className="forecast-details__humidity">
      Humidity: {props.forecast.humidity}
      </div>
      <div className="forecast-details__wind-speed">
      Wind Speed: {props.forecast.wind.speed}
      </div>
      <div className="forecast-details__wind-direction">
      Wind Direction: {props.forecast.wind.direction}
      </div>
    </div>
  );
};

export default ForecastDetails;

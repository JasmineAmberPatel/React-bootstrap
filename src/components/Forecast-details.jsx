import React from 'react';
import Moment from 'moment';

const ForecastDetails = props => {
  return (
    <div className="forecast-details-summary">
      <div className="forecast-details__date"> <span> {Moment(props.forecast.date).format('ddd Do MMM')}</span> </div>
      <div className="forecast-details__temperature-min"> {props.forecast.temperature.min} °C</div>
      <div className="forecast-details__temperature-max"> {props.forecast.temperature.max} °C</div>
      <div className="forecast-details__humidity"> {props.forecast.humidity} % </div>
      <div className="forecast-details__wind-speed"> {props.forecast.wind.speed} mph </div>
      <div className="forecast-details__wind-direction"> {props.forecast.wind.direction} </div>
    </div>
  );
};

export default ForecastDetails;

import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.scss';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({ selectedDate: date });
  }

  componentDidMount = () => {
    axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=London')
      .then(response => {
        this.setState({ forecasts: response.data.forecasts, location: response.data.location });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const selectedForecast =
      this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    if (this.state.forecasts) {
      return (
        <div className="forecast">
          <LocationDetails
            city={this.state.location.city}
            country={this.state.location.country}
          />
          <ForecastSummaries
            forecasts={this.state.forecasts}
            handleForecastSelect={this.handleForecastSelect}
          />
          {
            selectedForecast && <ForecastDetails forecast={selectedForecast} />
          }
        </div>
      );
    }
    return (
      <h1> sad :( </h1>
    );
  }
}

export default App;

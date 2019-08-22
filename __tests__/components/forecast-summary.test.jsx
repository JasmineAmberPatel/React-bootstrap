import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummaries from '../../src/components/forecast-summaries';
import ForecastSummary from '../../src/components/forecast-summary';

const forecasts = [
  {
    date: 123,
    description: 'date1',
    icon: 'icon1',
    temperature: {
      max: 999,
    },
  },
  {
    date: 456,
    description: 'date2',
    icon: 'icon2',
    temperature: {
      max: 777,
    },
  },
];

it('renders the correct amount of ForecastSummary components', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummaries forecast={forecasts} />
  ));
  expect(wrapper.find(ForecastSummary).length).toEqual(2);
})

it('passes the correct values from each forecast into each ForecastSummary', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummaries forecasts={forecasts} />
  ));
  wrapper.find(ForecastSummary).forEach((node, index) => {
    expect(node.prop('date')).toEqual(forecasts[index].date);
    expect(node.prop('description')).toEqual(forecasts[index].description);
    expect(node.prop('icon')).toEqual(forecasts[index].icon);
    expect(node.prop('temperature')).toEqual(forecasts[index].temperature.max);
    });
});

it('renders the date', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
      />
  ));
});
  expect(wrapper.find('.forecast-summary__date').text()).toEqual('mockDate');
});

it('renders the temperature', () => {
    const wrapper = shallow ((
        <ForecastSummary
          date="mockDate"
          temperature="mockTemperature"
          description="mockDescription"
          icon="mockIcon"
          />
    ));
    expect(wrapper.find('.forecast-summary__temperature').text()).toEqual('mockTemperature');
});

it('renders the description', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
  
    expect(wrapper.find('.forecast-summary__description').text()).toEqual('mockDescription');
  });
  
  it('renders the icon', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
  
    expect(wrapper.find('.forecast-summary__icon').text()).toEqual('mockIcon');
  });
  
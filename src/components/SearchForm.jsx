import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.state = {
      searchText: '',
    };
  }

  handleInputChange(event) {
    if (event.charCode !== 13) {
      this.setState({ searchText: event.target.value });
    }
  }

  handleCityChange(event) {
    if (event.target.tagName === 'BUTTON' || event.charCode === 13) {
      const newCity = this.state.searchText;
      this.props.handleClick(newCity);
      this.setState({ searchText: '' });
    }
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="City"
          onChange={this.handleInputChange}
          onKeyPress={this.handleCityChange}
          value={this.state.searchText}
        />
        <button
          className="search-button"
          type="button"
          onClick={this.handleCityChange}
        >
        Search Location
        </button>
      </div>
    );
  }
}


export default SearchForm;

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {WeatherForm} from 'components';

@connect(
  () => ({}),
  {})
export default class Weather extends Component {
  handleSubmit = (data) => {
    window.alert('Data submitted! ' + JSON.stringify(data));
  }

  render() {
    return (
      <div className="container">
        <WeatherForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

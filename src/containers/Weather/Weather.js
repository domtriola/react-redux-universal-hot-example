import React, {Component} from 'react';
import {connect} from 'react-redux';
import {WeatherForm} from 'components';

@connect(
  () => ({}),
  {})
export default class Weather extends Component {
  constructor() {
    super();

    this.state = { temp: null };
  }

  handleSubmit = (zip) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        const temp = JSON.parse(xmlHttp.responseText).main.temp;
        this.setState({ temp: temp });
      }
    };
    xmlHttp.open('GET',
      `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&&APPID=39984af74b5ae11f522f6e2b8be1e6b0`, true);
    xmlHttp.send(null);
  }

  renderTemp() {
    return (
      <div>
        It is {Math.floor(this.state.temp * 9 / 5 - 459.67)} degrees outside.
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <WeatherForm onSubmit={this.handleSubmit}/>
        {this.state.temp ? this.renderTemp() : null}
      </div>
    );
  }
}

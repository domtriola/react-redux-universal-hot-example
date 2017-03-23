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
    console.log(zip);
    const xmlHttp = new XMLHttpRequest();
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      const temp = JSON.parse(xmlHttp.responseText).main.temp;
      this.setState({ temp: temp });
    }
    xmlHttp.open('GET',
      `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&&APPID=5721bc15da4329b05a39030e3cef15a1`, true);
    xmlHttp.send(null);
  }

  renderTemp() {
    return (
      <div>
        It is {this.state.temp} degrees outside.
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

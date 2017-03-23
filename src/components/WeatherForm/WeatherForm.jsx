import React, {Component, PropTypes} from 'react';

class Weather extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = { zip: '' };
  }

  updateInput(evt) {
    evt.preventDefault();
    this.setState({ zip: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state.zip);
  }

  render() {
    return (
      <div>
        Enter your Zip Code...
        <input onChange={evt => this.updateInput(evt)} value={this.state.zip}></input>
        <button onClick={evt => this.handleSubmit(evt)}>Submit</button>
      </div>
    );
  }
}

export default Weather;

import React, {Component, PropTypes} from 'react';

class Weather extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = { zip: '' };
  }

  updateInput() {
    return (evt) => {
      this.setState({ zip: evt.target.value });
    };
  }

  render() {
    return (
      <form>
        Enter your Zip Code...
        <input onChange={this.updateInput()}></input>
        <button onClick={() => this.props.handleSubmit()}>Submit</button>
      </form>
    );
  }
}

export default Weather;

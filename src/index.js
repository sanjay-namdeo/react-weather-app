import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      postion => this.setState({ lat: postion.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    console.log(this.state);
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (this.state.errorMessage) {
      console.log("got the error");
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return <Spinner message="Please accept location permission" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

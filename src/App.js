import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate developer who loves coding.",
        imgSrc: "20240828_120657.jpg",
        profession: "Software Engineer",
      },
      shows: false,
      timeSinceMounted: 0,
    };
    this.toggleProfile = this.toggleProfile.bind(this);
  }

  componentDidMount() {
    // Start a timer to track time since the component was mounted
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts
    clearInterval(this.intervalId);
  }

  toggleProfile() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeSinceMounted } = this.state;

    return (
      <div className="App">
        <h1>Person Profile App</h1>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile">
            <img src={imgSrc} alt={`${fullName}'s profile`} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <h3>{profession}</h3>
          </div>
        )}

        <p>Time since component mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;

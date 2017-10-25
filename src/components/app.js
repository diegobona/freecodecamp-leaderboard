import React, { Component } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import LeaderboardList from './leaderboard-list';
import axios from 'axios';

const freeCodeCampLogo = require('.././images/freecodecamp-logo.png');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thirtyDays: [],
      allTime: [],
      currentView: 'thirtyDays'
    };
  }

  componentWillMount() {
    axios.all([this.fetchThirtyDays(), this.fetchAllTime()])
      .then(axios.spread((thirtyDays, allTime) => {
        this.setState({
          thirtyDays: thirtyDays.data,
          allTime: allTime.data
        });
      }));
  }

  fetchThirtyDays() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }

  fetchAllTime() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="text-center">
          <h1>
            <img src={freeCodeCampLogo} alt="freeCodeCamp" />
          </h1>
          <h2><span className="fa fa-trophy"></span> Leaderboard</h2>
        </header>
        <main>
          <div className="well">
            <LeaderboardList campers={this.state[this.state.currentView]} />
          </div>
        </main>
        <footer className="text-center">Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}

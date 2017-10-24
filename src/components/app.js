import React, { Component } from 'react';
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

  render() {
    return (
      <div className="container-fluid">
        <header className="text-center">
          <h1>
            <img src={freeCodeCampLogo} alt="freeCodeCamp" />
          </h1>
          <h2><span className="fa fa-trophy"></span> Leaderboard</h2>
        </header>
        <footer className="text-center">Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}

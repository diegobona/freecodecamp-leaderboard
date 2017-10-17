import React, { Component } from 'react';

export default class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <header className="text-center">
          <h1>freeCodeCamp <span className="fa fa-free-code-camp"></span></h1>
          <h2><span className="fa fa-trophy"></span> Leaderboard</h2>
        </header>
        <footer className="text-center">Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}

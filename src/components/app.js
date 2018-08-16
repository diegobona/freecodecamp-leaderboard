import React, { Component } from 'react';
import LeaderboardList from './leaderboard-list';
import axios from 'axios';
import { Navbar, Nav, NavItem, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

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

  fetchThirtyDays() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }

  fetchAllTime() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

  componentDidMount() {
    axios.all([this.fetchThirtyDays(), this.fetchAllTime()])
      .then(axios.spread((thirtyDays, allTime) => {
        this.setState({
          thirtyDays: thirtyDays.data,
          allTime: allTime.data
        });
        document.querySelector('.spinner').style.display = 'none';
        document.querySelector('.success').style.display = 'block';
      })).catch((error) => {
        document.querySelector('.spinner').style.display = 'none';
        document.querySelector('.error').style.display = 'block';
      });
  }

  changeView(currentView) {
    this.setState({ currentView });
  }

  render() {
    return (
      <div className="body">
        <div className="text-center spinner">
          <span className="fa fa-refresh fa-spin fa-fw"></span>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="container error">
          <div className="alert alert-danger text-center"><span className="fa fa-exclamation-circle fa-lg fa-fw"></span> Unable to load Free Code Camp leaderboard.</div>
        </div>
        <div className="success">
          <Navbar fixedTop>
            <h1>
              <img src={freeCodeCampLogo} alt="freeCodeCamp" />
            </h1>
          </Navbar>
          <h2 className="text-center"><span className="fa fa-trophy"></span> Leaderboard</h2>
          <div className="container-fluid">
            <main>
              <form>
                <fieldset>
                  <legend aria-label="Show top 100 campers for"></legend>
                  <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton value={1} onClick={() => this.changeView('thirtyDays')}>30 Days</ToggleButton>
                    <ToggleButton value={2} onClick={() => this.changeView('allTime')}>All Time</ToggleButton>
                  </ToggleButtonGroup>
                </fieldset>
              </form>
              <LeaderboardList campers={this.state[this.state.currentView]} />
            </main>
            <footer className="text-center">Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
          </div>
        </div>
      </div>
    );
  }
}

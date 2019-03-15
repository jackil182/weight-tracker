import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AddLog from '../AddLog/AddLog';
import Navigation from '../Navigation/Navigation';
import History from '../History/History';
import Logs from '../Logs/Logs';
import IMT from '../IMT/IMT';

import style from './Main.module.css';

class Main extends Component {
  state = {
    currentWeight: JSON.parse(localStorage.getItem('userInfo'))
      ? JSON.parse(localStorage.getItem('history'))[0].currentWeight
      : this.props.currentWeight,
    logDate: '',
    logFilled: false,
    historyWeight: JSON.parse(localStorage.getItem('history'))
      ? JSON.parse(localStorage.getItem('history'))
      : this.props.historyWeight,
    targetWeight: JSON.parse(localStorage.getItem('userInfo'))
      ? JSON.parse(localStorage.getItem('userInfo')).targetWeight
      : this.props.targetWeight
  };

  handleInputChange = ({ target }) => {
    this.setState(
      {
        [target.name]: target.value
      },
      () => {
        this.state.currentWeight.length > 0 && this.state.logDate.length > 0
          ? this.setState({ logFilled: true })
          : this.setState({ logFilled: false });
      }
    );
  };

  logWeight = () => {
    const log = {
      id: Date.now(),
      currentWeight: this.state.currentWeight,
      logDate: this.state.logDate
    };

    this.setState(
      prev => ({
        // currentWeight: '',
        logDate: '',
        historyWeight: [log, ...prev.historyWeight]
      }),
      () =>
        localStorage.setItem(
          'history',
          JSON.stringify(this.state.historyWeight)
        )
    );
  };

  cancelLog = () => {
    this.setState({
      // currentWeight: '',
      // logDate: '',
      logFilled: false
    });
  };

  render() {
    const { logFilled, historyWeight, targetWeight } = this.state;

    //sort data, so that the first index of the array is the newest data (according to selected logDate)
    const sortedHistory = historyWeight.sort(
      (a, b) => b.logDate.split('-').join('') - a.logDate.split('-').join('')
    );

    const height = JSON.parse(localStorage.getItem('userInfo')).height;

    return (
      <div className={style.Main}>
        <Navigation />
        
        <Switch>
          <Route
            exact
            path="/main"
            render={props => (
              <IMT
                currentWeight={sortedHistory[0].currentWeight}
                targetWeight={targetWeight}
                logDate={sortedHistory[0].logDate}
                height={height}
              />
            )}
          />
          <Route
            path="/main/history"
            render={props => <History historyWeight={historyWeight} />}
          />

          <Route
            path="/main/add"
            render={props => (
              <AddLog
                handleInputChange={this.handleInputChange}
                logWeight={this.logWeight}
                cancelLog={this.cancelLog}
                logFilled={logFilled}
              />
            )}
          />

          <Route
            path="/main/all-logs"
            render={props => <Logs historyWeight={historyWeight} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Main;

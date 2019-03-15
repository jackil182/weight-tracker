import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Main from './Main/Main';
import StartPage from './StartPage/StartPage';

import moment from 'moment';

// import Moment from 'react-moment';

import style from './App.module.css';

class App extends Component {
  state = {
    userName: '',
    height: '',
    currentWeight: '',
    targetWeight: '',
    dob: '1990-1-1',
    gender: '',
    userExists: localStorage.getItem('userInfo') ? true : false,
    logDate: '',
    historyWeight: '',
  };

  // getTodayDate() {
  //   let today = new Date();
  //   let dd = today.getDate();
  //   let mm = today.getMonth() + 1; //January is 0!
  //   let yyyy = today.getFullYear();
  //   if (dd < 10) {
  //     dd = '0' + dd;
  //   }
  //   if (mm < 10) {
  //     mm = '0' + mm;
  //   }

  //   return today =`${yyyy}-${mm}-${dd}`;
  // };

  updateUserInfo = () => {
    let data = {
      id: Date.now(),
      currentWeight: this.state.currentWeight,
      // logDate: this.getTodayDate(),
      logDate: moment().format('YYYY-MM-DD'),
    }
    const log = {
      ...this.state,
      // logDate: this.getTodayDate(),
      logDate: moment().format('YYYY-MM-DD'),
      historyWeight: [data]
      
    };
    localStorage.setItem('userInfo', JSON.stringify(log));
    localStorage.setItem('history', JSON.stringify(log.historyWeight));

    this.setState({
      historyWeight: [data]
  })
};

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleCalendarInput = (value) => {
    this.setState({
      dob: moment(value).format('YYYY-MM-DD'),
    })
  }

  render() {
    const {
      userName,
      height,
      currentWeight,
      targetWeight,
      dob,
      gender,
      userExists,
      historyWeight,
      logDate,
    } = this.state;

    return (
      <div className={style.App}>
        <Route
          exact
          path="/"
          render={() =>
            userExists ? (
              <Redirect to="/main" />
            ) : (
              <StartPage
                updateUserInfo={this.updateUserInfo}
                handleInputChange={this.handleInputChange}
                handleCalendarInput={this.handleCalendarInput}
                userName={userName}
                height={height}
                currentWeight={currentWeight}
                targetWeight={targetWeight}
                dob={dob}
                gender={gender}
              />
            )
          }
        />
        <Route
          path="/main"
          render={props => (
            <Main
              currentWeight={currentWeight}
              targetWeight={targetWeight}
              historyWeight={historyWeight}
              logDate={logDate}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default App;

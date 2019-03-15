import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import OverviewToggle from '../OverviewToggle/OverviewToggle';
import MonthView from '../MonthView/MonthView';
import YearView from '../YearView/YearView';
import Logs from '../Logs/Logs';

import { Line } from 'react-chartjs-2';

import style from './History.module.css';

const History = ({ historyWeight }) => {
  // const sortedHistory = historyWeight.map(a => (a.logDate.split)('-').join('')).sort((a,b) => a-b);
  // const sortedHistory = historyWeight.sort((a,b) => a.logDate.split('-').join('') - b.logDate.split('-').join(''));

  const weights = historyWeight.map(el => el.currentWeight).reverse();
  const dates = historyWeight.map(el => el.logDate).reverse();

  const data = {
    labels: [...dates],

    datasets: [
      {
        label: 'All History',
        data: [...weights],
        fill: false,
        borderColor: '#90F58C'
      }
    ]
  };

  return (
    <div className={style.History}>
      {/* <h1>History</h1> */}
      <OverviewToggle />

      <Switch>
        <Route
          path="/main/history/month"
          render={props => (
            <MonthView
              historyWeight={historyWeight}
              weights={weights}
              dates={dates}
            />
          )}
        />
        <Route
          path="/main/history/year"
          render={props => (
            <YearView data={data} historyWeight={historyWeight} />
          )}
        />
        <Route
          exact
          path="/main/history/"
          render={props => <Line data={data} height={250} />}
        />
      </Switch>

      <NavLink className={style.link} to="/main/all-logs">
        View All Logs
      </NavLink>
    </div>
  );
};

export default History;

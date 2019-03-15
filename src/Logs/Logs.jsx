import React from 'react';
import List from '../List/List';
import style from './Logs.module.css';

import { NavLink } from 'react-router-dom';

const Logs = ({ historyWeight }) => {
  return (
    <div className={style.Logs}>
      {historyWeight.length > 0 && (
        <div className={style.tableWrapper}>
          <List historyWeight={historyWeight} />
        </div>
      )}
      {historyWeight.length <= 0 && <p>Empty List</p>}
      <NavLink className={style.link} to="/main/history">
        Return to History
      </NavLink>
    </div>
  );
};

export default Logs;

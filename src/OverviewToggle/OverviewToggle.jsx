import React from 'react';
import {NavLink} from 'react-router-dom';

import style from './OveriewToggle.module.css';

const OverviewToggle = () => {
  return (
    <div className={style.wrapper}>
      <NavLink className={style.link} to='/main/history/month'>Last <br />30 days</NavLink>
      <NavLink className={style.link} to='/main/history/year'>Last <br />365 days</NavLink>
      <NavLink className={style.link} to='/main/history/'>All</NavLink>
    </div>
  );
};

export default OverviewToggle;
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <div className={style.header}>
        <NavLink className={style.link} to="/main">
          Dashboard
        </NavLink>
        <NavLink className={style.link} to="/main/history">
          History
        </NavLink>
        <NavLink className={`${style.link} ${style.add}`} to="/main/add">
          
        </NavLink>
      </div>

    </div>
  );
};

export default Navigation;

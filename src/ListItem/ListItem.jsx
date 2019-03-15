import React from 'react';

import style from './ListItem.module.css';

const ListItem = ({ weight, date }) => {
  return (
    <div className={style.ListItem}>
      <div className={style.date}>{date}</div>
      <div className={style.weight}>{weight}</div>
      <div className={style.weight}>{weight}</div>
    </div>
  );
};

export default ListItem;

import React from 'react';
import ListItem from '../ListItem/ListItem';

import style from './List.module.css'

const List = ({ historyWeight }) => {
  console.log(historyWeight);
  return (
    <div className={style.List}>
      <div className={style.tableHead}>
        <div className={style.date}>Date</div>
        <div className={style.weight}>Weight</div>
        <div className={style.difference}>+/-</div>
      </div>
      {historyWeight.map(item => (
        <ListItem
          key={item.id}
          weight={item.currentWeight}
          date={item.logDate}
        />
      ))}
    </div>
  );
};

export default List;

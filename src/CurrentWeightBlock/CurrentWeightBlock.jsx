import React from 'react';
import style from "./CurrentWeightBlock.module.css";

const CurrentWeightBlock = ({currentWeight, logDate}) => {
  console.log(currentWeight);
  return (
    <div className={style.block}>
      <h4>Current weight</h4>
      <p className={style.number}>{currentWeight} kg</p>
      <p>{logDate}</p>
    </div>
  );
};

export default CurrentWeightBlock;
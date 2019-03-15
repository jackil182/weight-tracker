import React from 'react';
import CurrentWeightBlock from '../CurrentWeightBlock/CurrentWeightBlock';
import TargetWeightBlock from '../TargetWeightBlock/TargetWeightBlock';
import GaugeChart from '../Gauge/Gauge';
// import ReactSpeedometer from 'react-d3-speedometer';

import style from './IMT.module.css';

const IMT = ({ currentWeight, targetWeight, logDate, height }) => {
  const delta = targetWeight - currentWeight;
  //BMI = weight (kg) ÷ height2 (m2)
  const BMI = Math.round((currentWeight / Math.pow(height / 100, 2)) * 10) / 10;
  // console.log('BMI', BMI);
  return (
    <div className={style.IMT}>
      {/* <h2>Dashboard</h2> */}
      <div className={style.blocks}>
        <CurrentWeightBlock currentWeight={currentWeight} logDate={logDate} />
        <TargetWeightBlock targetWeight={targetWeight} delta={delta} />
      </div>

      <GaugeChart BMI={BMI} />

      <h4 className={style.info}>Your BMI is {BMI}</h4>
      <div className={style.stats}>
        {height}cm, {currentWeight}kg
      </div>
    </div>
  );
};

export default IMT;

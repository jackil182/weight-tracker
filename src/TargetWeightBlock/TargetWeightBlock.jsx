import React from 'react';
import style from './TargetWeightBlock.module.css';

const TargetWeightBlock = ({ targetWeight, delta }) => {
  return (
    <div className={style.block}>
      <h4>Target weight</h4>
      <p className={style.number}>{targetWeight} kg</p>
      <p>To Goal: {delta > 0 ? '+' : ''}{delta} kg</p>
    </div>
  );
};

export default TargetWeightBlock;

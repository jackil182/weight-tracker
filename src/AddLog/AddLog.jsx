import React from 'react';
import Input from '../Input/Input';
import { NavLink } from 'react-router-dom';

import style from './AddLog.module.css';

const AddLog = ({ handleInputChange, logWeight, cancelLog, logFilled }) => {
  return (
    <div>
      <form className={style.form}>
        <Input
          text="Weight"
          type="number"
          name="currentWeight"
          // value=""
          placeholder=""
          onChange={handleInputChange}
          labelClass={style.label}
          className={style.input}
        />
        <Input
          text="Date"
          type="date"
          name="logDate"
          // value=""
          placeholder=""
          onChange={handleInputChange}
          labelClass={style.label}
          className={style.input}
        />

      </form>
        <NavLink to="/main" className={`${style.btn} ${style.btnCancel}`} onClick={cancelLog}>
          Cancel
        </NavLink>

        {logFilled && (
          <NavLink to="/main/history" className={`${style.btn} ${style.btnSubmit}`} onClick={logWeight}>
            Save and Continue
          </NavLink>
        )}
    </div>
  );
};

export default AddLog;

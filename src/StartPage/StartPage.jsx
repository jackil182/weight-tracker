import React from 'react';
import Input from '../Input/Input';
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-date-picker';

import style from './StartPage.module.css';

const StartPage = ({
  updateUserInfo,
  handleInputChange,
  handleCalendarInput,
  userName,
  height,
  currentWeight,
  targetWeight,
  dob,
  gender
}) => {
  return (
    <div className={style.StartPage}>
      <h1>Welcome</h1>
      <p>Enter your info</p>
      <form className={style.form}>
        <Input
          text="Name"
          type="text"
          name="userName"
          placeholder=""
          onChange={handleInputChange}
          labelClass={style.input}
          className={style.name}
        />

        {/* <Input
          text="Birthday"
          type="date"
          name="dob"
          placeholder=""
          onChange={handleInputChange}
          labelClass={style.input}
          className={style.dob}
        /> */}

        <label className={style.input}>
          <span>Birthday</span>
          <DatePicker
            onChange={handleCalendarInput}
            className={style.calendar}
            maxDate={new Date(Date.now())}
            clearIcon={null}
            name="dob"
            required={true}
            value={new Date(dob)}
          />
        </label>

        <div className={style.genderWrapper}>
          <Input
            text="Male"
            type="radio"
            name="gender"
            value="male"
            id='male'
            hidden={true}
            placeholder=""
            onChange={handleInputChange}
            labelClass={`${style.input} ${style.gender}`}
            className={style.radio}
          />
          <Input
            text="Female"
            type="radio"
            name="gender"
            value="female"
            id='female'
            hidden={true}
            placeholder=""
            onChange={handleInputChange}
            labelClass={`${style.input} ${style.gender}`}
            className={style.radio}
          />
        </div>
        <Input
          text="Current Weight"
          type="number"
          name="currentWeight"
          placeholder=""
          onChange={handleInputChange}
          labelClass={style.input}
          className={style.weight}
        />
        <Input
          text="Target Weight"
          type="number"
          name="targetWeight"
          // value=""
          placeholder=""
          onChange={handleInputChange}
          labelClass={style.input}
          className={style.weight}
        />
        <Input
          text="Height"
          type="number"
          name="height"
          // value=""
          placeholder=""
          onChange={handleInputChange}
          labelClass={style.input}
          className={style.weight}
        />

        {userName.length > 0 &&
          height.length > 0 &&
          currentWeight.length > 0 &&
          targetWeight.length > 0 &&
          dob.length > 0 &&
          gender.length > 0 && (
            <NavLink to="/main" className={style.btn} onClick={updateUserInfo}>
              Save and Continue
            </NavLink>
          )}
      </form>
      <div className={style.imgWrapper} />
    </div>
  );
};

export default StartPage;

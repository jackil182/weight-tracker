import React from 'react';
import { Line } from 'react-chartjs-2';

import moment from 'moment';


const YearView = ({historyWeight}) => {

  const dayYearAgo = moment()
  .subtract(1, 'year')
  .format('YYYYMMDD');

  const yearData = historyWeight.filter(
    el =>
      el.logDate.split('-').join('') > dayYearAgo &&
      el.logDate.split('-').join('') <=
        moment().format('YYYYMMDD')

  );

  const weights = yearData.map(el => el.currentWeight).reverse();
  const dates = yearData.map(el => el.logDate).reverse();

  const data = {
    labels: [...dates],

    datasets: [
      {
        label: 'Last 365 days',
        data: [...weights],
        fill: false,
        borderColor: '#90F58C'
      }
    ]
  };


  return (
    <div>
      {/* <h1>YEAR VIEW</h1> */}
      <Line data={data} height={250} />
    </div>
  );
};

export default YearView;
import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

// import Moment from 'react-moment';

const MonthView = ({ historyWeight }) => {
  const dayMonthAgo = moment()
    .subtract(30, 'days')
    .format('YYYYMMDD');

  const monthData = historyWeight.filter(
    el =>
      el.logDate.split('-').join('') > dayMonthAgo &&
      el.logDate.split('-').join('') <=
        moment().format('YYYYMMDD')
  );
  
  const weights = monthData.map(el => el.currentWeight).reverse();
  const dates = monthData.map(el => el.logDate).reverse();

  const data = {
    labels: [...dates],

    datasets: [
      {
        label: 'Last 30 days',
        data: [...weights],
        fill: false,
        borderColor: '#90F58C'
      }
    ]
  };

  return (
    <div>
      {/* <h1>MonthView</h1> */}
      <Line data={data} height={250} />
    </div>
  );
};

export default MonthView;

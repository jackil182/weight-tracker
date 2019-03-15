import React from 'react';
import { Sector, Cell, PieChart, Pie } from 'recharts';

import './Gauge.css';

const GaugeChart = ({BMI}) => {
  const width = 320;
  const chartValue = BMI;
  const colorData = [
    {
      value: 12, // Meaning span is 0 to 18
      color: '#CC0000'
    },
    {
      value: 6, // Meaning span is 16 to 18
      color: '#f6961e'
    },
    {
      value: 7, // span 18 to 25
      color: '#6bdd60'
    },
    {
      value: 5, // Meaning span is 0 to 18
      color: '#f6961e'
    },
    {
      value: 10, // span 25 to 40
      color: '#CC0000'
    }
  ];

  const activeSectorIndex = colorData
    .map((cur, index, arr) => {
      const curMax = [...arr]
        .splice(0, index + 1)
        .reduce((a, b) => ({ value: a.value + b.value })).value;
      return chartValue > curMax - cur.value && chartValue <= curMax;
    })
    .findIndex(cur => cur);


  const sumValues = colorData.map(cur => cur.value).reduce((a, b) => a + b);

  const arrowData = [
    { value: chartValue },
    { value: 0 },
    { value: sumValues - chartValue }
  ];

  const pieProps = {
    startAngle: 200,
    endAngle: 0,
    cx: width / 2,
    cy: width / 2
  };

  const pieRadius = {
    innerRadius: (width / 2) * 0.35,
    outerRadius: (width / 2) * 0.8  ,
  };

  const Arrow = ({ cx, cy, midAngle, outerRadius }) => {
    //eslint-disable-line react/no-multi-comp
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const mx = cx + (outerRadius + width * 0.15) * cos;
    const my = cy + (outerRadius + width * 0.15) * sin;
    return (
      <g>
        <circle cx={cx} cy={cy} r={width * 0.05} fill="#90f58c" stroke="none" />
        <path
          d={`M${cx},${cy}L${mx},${my}`}
          strokeWidth="5"
          stroke="#7F2626"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    );
  };

  const ActiveSectorMark = ({
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill
  }) => {
    //eslint-disable-line react/no-multi-comp
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius * 1.2}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <PieChart width={width} height={width / 2 }>
      <Pie
        activeIndex={activeSectorIndex}
        activeShape={ActiveSectorMark}
        data={colorData}
        fill="#8884d8"
        {...pieRadius}
        {...pieProps}
      >
        {colorData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colorData[index].color} />
        ))}
      </Pie>
      <Pie
        stroke="none"
        activeIndex={1}
        activeShape={Arrow}
        data={arrowData}
        outerRadius={pieRadius.innerRadius}
        fill="none"
        {...pieProps}
      />
    </PieChart>
  );
};

export default GaugeChart;

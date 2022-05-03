import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts';

const data = [
  { date: '2020-02-01', physical: 0.99, emotional: 0.5, intellectual: -0.25 },
  { date: '2020-02-02', physical: 0.1, emotional: -0.5, intellectual: 0.25 },
  { date: '2020-02-03', physical: 0.19, emotional: 0.15, intellectual: -0.45 },
];

export default function BiorhythmChart() {
  return (
    <ResponsiveContainer width='100%' height={200}>
      <LineChart data={data}>
        <XAxis dataKey='date' />
        <Line dataKey='physical' stroke='green' />
        <Line dataKey='emotional' stroke='red' />
        <Line dataKey='intellectual' stroke='blue' />
      </LineChart>
    </ResponsiveContainer>
  );
}

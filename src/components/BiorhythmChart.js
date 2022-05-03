import dayjs from 'dayjs';
import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
} from 'recharts';
import { calculateBiorhythmSeries } from '../calculations';

function formatDate(isoString) {
  return dayjs(isoString).format('D MMM');
}

export default function BiorhythmChart({ birthDate, targetDate }) {
  const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
  const data = calculateBiorhythmSeries(birthDate, startDate, 31).map((item) => ({
    ...item,
    date: formatDate(item.date),
  }));
  return (
    <ResponsiveContainer width='100%' height={200}>
      <LineChart data={data}>
        <XAxis dataKey='date' />
        <CartesianGrid vertical={false} strokeDasharray='3 3' />
        <ReferenceLine x={data[15].date} />
        <Line type='natural' dot={false} dataKey='physical' stroke='green' />
        <Line type='natural' dot={false} dataKey='emotional' stroke='red' />
        <Line type='natural' dot={false} dataKey='intellectual' stroke='blue' />
      </LineChart>
    </ResponsiveContainer>
  );
}

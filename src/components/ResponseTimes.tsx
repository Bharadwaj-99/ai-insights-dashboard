import React from 'react';
import {
  
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,

} from 'recharts';
import { AIData } from '../types';

interface ResponseTimesProps {
  data: AIData;
}

const ResponseTimes: React.FC<ResponseTimesProps> = ({ data }) => {
  const { response_times } = data;

  return (
    <div>
      <h2>Response Times</h2>
      <h3>Daily Average</h3>
      <LineChart width={800} height={400} data={response_times.day_wise}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
      </LineChart>

      <h3>Weekly Average</h3>
      <LineChart width={800} height={400} data={response_times.week_wise}>
        <XAxis dataKey="week" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default ResponseTimes;
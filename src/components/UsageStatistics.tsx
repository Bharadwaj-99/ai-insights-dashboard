import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AIData } from '../types';

interface UsageStatisticsProps {
  data: AIData;
}

const UsageStatistics: React.FC<UsageStatisticsProps> = ({ data }) => {
  const { by_platform, by_country } = data.usage_statistics;

  const platformData = Object.entries(by_platform).map(([platform, count]) => ({
    platform,
    count,
  }));

  const countryData = Object.entries(by_country).map(([country, count]) => ({
    country,
    count,
  }));

  return (
    <div>
      <h2>Usage Statistics</h2>
      <h3>By Platform</h3>
      <BarChart width={800} height={400} data={platformData}>
        <XAxis dataKey="platform" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>

      <h3>By Country</h3>
      <BarChart width={800} height={400} data={countryData}>
        <XAxis dataKey="country" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default UsageStatistics;
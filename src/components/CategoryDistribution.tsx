import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  
} from 'recharts';
import { AIData } from '../types';

interface CategoryDistributionProps {
  data: AIData;
}

const CategoryDistribution: React.FC<CategoryDistributionProps> = ({ data }) => {
  const categories = Object.entries(data.category_distribution).map(([category, count]) => ({
    category,
    count,
  }));

  return (
    <div>
      <h2>Category Distribution</h2>
      <BarChart width={800} height={400} data={categories}>
        <XAxis dataKey="category" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default CategoryDistribution;
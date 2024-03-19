import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { AIData } from '../types';

interface UserSatisfactionProps {
  data: AIData;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const UserSatisfaction: React.FC<UserSatisfactionProps> = ({ data }) => {
  const { ratings } = data.user_satisfaction;

  return (
    <div>
      <h2>User Satisfaction</h2>
      <PieChart width={800} height={400}>
        <Pie
          data={ratings}
          cx={400}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="count"
        >
          {ratings.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default UserSatisfaction;
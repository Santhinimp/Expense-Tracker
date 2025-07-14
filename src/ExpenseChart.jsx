import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Typography, Box } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#aa55cc'];

const ExpenseChart = ({ expenses }) => {
  // Group expenses by category
  const data = expenses.reduce((acc, curr) => {
    const found = acc.find(item => item.name === curr.category);
    if (found) {
      found.value += Number(curr.amount);
    } else {
      acc.push({ name: curr.category, value: Number(curr.amount) });
    }
    return acc;
  }, []);

  return (
    <Box sx={{ height: 300 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Category-wise Breakdown
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
  data={data}
  dataKey="value"
  nameKey="name"
  outerRadius={100}
  label
  isAnimationActive={true}  // enables animation
  animationDuration={800}
>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ExpenseChart;

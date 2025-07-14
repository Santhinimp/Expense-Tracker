import React, { useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import ExpenseForm from './ExpenseForm';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Total Expense: ₹{total}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ExpenseForm onAdd={handleAddExpense} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ExpenseChart expenses={expenses} />
          </Grid>
        </Grid>
        <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
      </Paper>
    </Container>
  );
};

export default App;

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box
} from '@mui/material';

const ExpenseForm = ({ onAdd }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Default to today

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category || !description || !date) return;

    onAdd({ amount, category, description, date });
    setAmount('');
    setCategory('');
    setDescription('');
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Amount"
        type="number"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{ mb: 2 }}
        required
      />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Transport">Transport</MenuItem>
          <MenuItem value="Shopping">Shopping</MenuItem>
          <MenuItem value="Utilities">Utilities</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Description"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 2 }}
        required
      />
      <TextField
        label="Date"
        type="date"
        fullWidth
        value={date}
        onChange={(e) => setDate(e.target.value)}
        sx={{ mb: 2 }}
        InputLabelProps={{ shrink: true }}
        required
      />
      <Button type="submit" variant="contained" fullWidth>
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;

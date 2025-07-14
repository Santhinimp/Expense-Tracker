import React from 'react';
import {
  List, ListItem, ListItemText, IconButton, Divider, Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ExpenseList = ({ expenses, onDelete }) => (
  <>
    <Typography variant="h6" sx={{ mt: 4 }}>
      All Expenses
    </Typography>
    <List>
      {expenses.map((exp, index) => (
        <React.Fragment key={index}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() => onDelete(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={`₹${exp.amount} - ${exp.category}`}
              secondary={exp.description}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  </>
);

export default ExpenseList;

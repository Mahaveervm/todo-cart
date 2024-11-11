import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cartSlice';
import { Button, Card, CardContent, Typography } from '@mui/material';

const TodoItem = ({ todo, inCart }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(todo.id));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(todo.id));
  };

  return (
    <Card variant="outlined" style={{ margin: '10px', padding: '10px' }}>
      <CardContent>
        <Typography variant="h6">{todo.title}</Typography>
        <Typography variant="body2">Status: {todo.completed ? 'Completed' : 'Incomplete'}</Typography>
        {!inCart ? (
          <Button onClick={handleAddToCart} variant="contained" color="primary">
            Add to Cart
          </Button>
        ) : (
          <Button onClick={handleRemoveFromCart} variant="contained" color="secondary">
            Remove from Cart
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TodoItem;

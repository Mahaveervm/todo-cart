import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((todo) => <TodoItem key={todo.id} todo={todo} inCart />)
      )}
    </div>
  );
};

export default Cart;

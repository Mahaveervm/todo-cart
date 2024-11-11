import React from 'react';
import TodoList from './components/TodoList';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <h1>Todo Cart</h1>
      <TodoList />
      <Cart />
    </div>
  );
}

export default App;

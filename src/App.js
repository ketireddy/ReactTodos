import React from 'react';
import logo from './logo.svg';
import {hot} from 'react-hot-loader';
import TodoList from './todos/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;

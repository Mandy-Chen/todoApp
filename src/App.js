import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoFormContainer from './containers/TodoFormContainer'
import TodoListContainer from './containers/TodoListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListContainer></TodoListContainer>
        <TodoFormContainer></TodoFormContainer>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoFormContainer from './containers/TodoFormContainer'
import TodoListContainer from './containers/TodoListContainer'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList></TodoList>
      {/* <TodoFormContainer></TodoFormContainer> */}
        {/* <TodoListContainer></TodoListContainer> */}
   
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import TodoFormContainer from './containers/TodoFormContainer'
import TodoListContainer from './containers/TodoListContainer'
import TodoList from './components/TodoList'
import { Router, Route, browserHistory } from 'react-router';
function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* <Router>
          <Route path="/" component={App} />
        </Router> */}
        <TodoFormContainer></TodoFormContainer>
        <TodoListContainer></TodoListContainer>
       
      </header>
    </div>
  );
}

export default App;

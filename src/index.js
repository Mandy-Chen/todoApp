import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { reducer } from './reducers/index'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MarkedContainer from './containers/MarkedContainer';
import { Affix, Button } from 'antd';
import NavBar from "./components/NavBar"
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <div className="bg">
        <NavBar></NavBar>
        </div>
        {/* <Affix offsetTop={50}>
          <Button><Link to="/all">All</Link></Button>
        </Affix>
        <Affix offsetTop={100}>
          <Button><Link to="/todo">Todo</Link></Button>
        </Affix>
        <Affix offsetTop={150}>
          <Button><Link to="/done">Done</Link></Button>
        </Affix> */}

        <Route exact path="/done" component={MarkedContainer} />
        <Route exact path="/all" component={App} />
        <Route exact path="/todo" component={App} />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default store;
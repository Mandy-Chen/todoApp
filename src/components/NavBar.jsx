import React from "react";
import './todo.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Affix, Button } from 'antd';
import TodoFormContainer from '../containers/TodoFormContainer'
import AllTodoListContainer from "../containers/AllTodoListContainer";
import TodoListContainer from "../containers/TodoListContainer"
import MarkedContainer from "../containers/MarkedContainer"
class NavBar extends React.Component {
    render() {
        return (
            <Router>
                <div className="bg">
                    <Affix offsetTop={50}>
                        <Button className="nav_button">
                            <Link to="/all">
                                All
                            </Link>
                        </Button>
                    </Affix>
                    <Affix offsetTop={100}>
                        <Button className="nav_button">
                            <Link to="/todo">Todo</Link>
                        </Button>
                    </Affix>
                    <Affix offsetTop={150}>
                        <Button className="nav_button">
                            <Link to="/done">Done</Link>
                        </Button>
                    </Affix>
                    <Affix style={{ position: 'absolute', top: 50, left: 200 }}>
                        <TodoFormContainer></TodoFormContainer>
                    </Affix>
                    <div>
                    </div>,
                    <Route exact path="/done" component={MarkedContainer} />
                    <Route exact path="/all" component={AllTodoListContainer} />
                    <Route exact path="/todo" component={TodoListContainer} />
                </div>

            </Router>
        )

    }

}

export default NavBar
import React from 'react';
import Home from './Home.jsx';
import Login from './Login.jsx';
import News from './News.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./layout.css";

const Layout = () => {
    return (
        <Router>
          <div className="header">
            <Link id="link" to="/login">Login</Link>
            <Link id="link" to="/news">News</Link>
          </div>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/news" component={News} />
            </Switch>
          </div>
        </Router>
      );
};

export default Layout;
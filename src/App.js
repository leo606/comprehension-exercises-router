import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/strict-access">Strict Access</Link>
          </li>
        </ul>
        <Switch>
          <Route
            path="/strict-access"
            render={() => <StrictAccess user={{ username: 'joaod', password: '1234' }} />}
          />
          <Route
            path="/users/:id"
            render={(props) => <Users {...props} greetingsMessage="Good Morning" />}
          />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

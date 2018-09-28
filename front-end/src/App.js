import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Jar from './pages/Jar';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path ="/" exact component={Home} />
          <Route path ="/profile/:profile_id" component={Profile} />
          <Route path ="/jar/:jar_id" component={Jar} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'

class Main extends Component {
  render() {
    return (
      <div className="container">
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default Main;
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Jokes from './components/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/signup'>Sign Up</Link>
        <Link to='/signin'>Sign In</Link>
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/jokes' component={Jokes} />
      </div>
    );
  }
}

export default App;

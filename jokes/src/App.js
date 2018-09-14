import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { withRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Jokes from './components/Jokes';

class App extends Component {
  signOut = e => {
    localStorage.removeItem('jwt');
    this.props.history.push('/signin');
  }
  render() {
    return (
      <div className="App">
        <Button><Link to='/signup'>Sign Up</Link></Button>
        <Button><Link to='/signin'>Sign In</Link></Button>
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/jokes' component={Jokes} />
        <Button onClick={this.signOut}>Sign Out</Button>
      </div>
    );
  }
}

export default withRouter(App);

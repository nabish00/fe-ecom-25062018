import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { SignUpPage } from './SignUp.js';

class App extends Component {
  render() {
    return (
        <Route path='/signup' component={SignUpPage}/>
    );
  }
}

export default App;
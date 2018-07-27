import React, { Component } from 'react';
import {  Route, Link } from 'react-router-dom';
import SignUpPage from './SignUp/SignUpPage';

export default class Navbar extends Component {
    render() {
      return (
        <div className="container-fluid">
          <Link to="/signup" >Register</Link>
          <Route exact path="/signup" component={SignUpPage} />
        </div>
      );
    }
  }

import React, { Component } from 'react';
import {  Route, Link } from 'react-router-dom';
import SignUpPage from './SignUpPage'

class Navbar extends Component {
    render() {
      return (
        <div className="container-fluid">
          <Link to="/signup" exact Component={SignUpPage} />
        </div>
      );
    }
  }
  
  export default Navbar;

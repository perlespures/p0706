import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer/Footer'
import RegisterForm from './Forms/RegisterForm'
import LoginForm from './Forms/LoginForm'



class UserProfile extends Component {
  render() {
    return (
      <div>
        <Header />
        <RegisterForm />
        <LoginForm />
        <Footer /> 
        
      </div>
    );
  }
}

export default UserProfile
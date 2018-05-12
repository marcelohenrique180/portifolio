import React, { Component } from 'react';
import './User.css';
import pic from './foto.jpg'

class User extends Component {
  render() {
    return (
      <div className="user">
        <img src={pic} alt="pic" className="user__pic"/>
        <h3 className="user__name" >Marcelo Henrique</h3>
      </div>
    );
  }
}

export default User

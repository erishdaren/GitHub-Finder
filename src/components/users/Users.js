import React, { Component } from 'react';
import UsersItem from './UsersItem';

export default class Users extends Component {

  render() {
    return (
      <div style={userStyle}>
        {this.props.user.map(user => (
          <UsersItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display : 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap : '1rem'
}
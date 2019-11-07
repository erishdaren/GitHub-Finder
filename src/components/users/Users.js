import React, { Component } from 'react';
import UsersItem from './UsersItem';

export default class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'simonjefford',
        avatar_url: 'https://avatars2.githubusercontent.com/u/136?v=4',
        html_url: 'https://github.com/simonjefford'
      },
      {
        id: '2',
        login: 'josh',
        avatar_url: 'https://avatars2.githubusercontent.com/u/137?v=4',
        html_url: 'https://github.com/josh'
      },
      {
        id: '3',
        login: 'stevedekorte',
        avatar_url: 'https://avatars3.githubusercontent.com/u/138?v=4',
        html_url: 'https://github.com/stevedekorte'
      }
    ]
  };
  // me quede en el video 3 minuto 02:51
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
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
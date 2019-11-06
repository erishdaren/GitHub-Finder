import React, { Component } from 'react';

export default class UserItem extends Component {
  state = {
    id: 'id',
    login: 'simonjefford',
    avatar_url: 'https://avatars2.githubusercontent.com/u/136?v=4',
    html_url: 'https://github.com/simonjefford'
  };
  render() {
      const {avatar_url, login, html_url} = this.state;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a
            href={html_url}
            className="btn btn-dark btn-sm my-1"
          > Reed More...</a>
        </div>
      </div>
    );
  }
}

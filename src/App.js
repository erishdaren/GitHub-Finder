import './App.css';
import Navbar from './components/layout/Navbar';
import React, { Component } from 'react';
import Users from './components/users/Users';
import axios from 'axios';

export default class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
                              &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} user={this.state.users} />
        </div>
      </div>
    );
  }
}

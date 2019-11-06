import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends Component {
  static defaultProps = {
    title: 'GitHub Finder',
    icon: 'fa fa-github'
  };
  static propTypes = {
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i> {this.props.title}
        </h1>
      </div>
    );
  }
}

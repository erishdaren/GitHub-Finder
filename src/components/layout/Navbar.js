import React from 'react';
import PropTypes from 'prop-types';

const Navbar =({ icon, title}) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </div>
  );
};
Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fa fa-github'
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;

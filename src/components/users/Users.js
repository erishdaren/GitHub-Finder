import React from 'react';
import UsersItem from './UsersItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ user, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {user.map(user => (
          <UsersItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

UsersItem.propTypes = {
user:PropTypes.array.isRequired,
loading: PropTypes.bool.isRequired
}

export default Users;
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul className='nav nav-pills flex-column flex-sm-row m-3'>
        <li className='nav-link bg-light me-2'>
          <Link to='/main'>Main</Link>
        </li>
        <li className='nav-link bg-light me-2'>
          <Link to='/login'>Login</Link>
        </li>
        <li className='nav-link bg-light'>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

function Header() {
  const botaoClicado = useSelector(state => state.example)

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/865865">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}

export default Header;

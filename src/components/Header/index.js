import React from 'react'
import { Link } from 'wouter'
import './index.css'

import useUser from '../../hooks/useUser'

const Header = ({})  => {
  const { isLogged, logout } = useUser();

  const handleClick = evt => {
    event.preventDefault()
    logout()
  }

  return(
    <header className="gf-header">
      {
        isLogged
          ? 
          <Link href='#' onClick={handleClick}>
          logout
          </Link>
          :
          <Link to='/login'>
          Login
          </Link>
      }
    </header>
  );
}

export default Header
import React from 'react'
import Title from './Title';
import NavBar from './Navbar';

const Header = () => {
  return (
    <div className="header">
            <Title/>
            <div className="nav-items">
            <NavBar/>
            </div>
    </div>
  )
}

export default Header

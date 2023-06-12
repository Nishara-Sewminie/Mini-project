import React from 'react'
import './nav.css';
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
          <Link to="/" className='nav-item'>Homepage</Link>
          <Link to="/recipie" className='nav-item'>Recipie</Link>
          <Link to="/about" className='nav-item'>About</Link>
        </nav>
    </div>
  )
}

export default Nav

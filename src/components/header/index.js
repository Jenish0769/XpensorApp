import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header'>
        <div className='header-logo'>expense<i class="fi fi-rr-credit-card"></i></div>
        <div className='header-button'>
          <a href='https://github.com'>
            <i class="devicon-github-original"></i>star
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
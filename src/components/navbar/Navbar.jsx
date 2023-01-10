import React from 'react'
import logo from "../../images/logo.svg";
import '../../index.css'

const Navbar = () => {

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <ul className='nav-menu'>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Community</li>
                    <li className='nav-item'>News & Events</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
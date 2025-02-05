import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

function Navbar() {

    const [Mobile, setMobile] = useState(false)
    return (
        <nav className='navbar'>

<div className='nav-logo'>
    <Link to='/' className='logo-link'>
        <img className='logo' src='./public/images/logo.png' alt='Logo' />
        <h3 className='logo-text'>YatraSahayak</h3>
    </Link>
</div>


            <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <Link to='/plan'><li>Trip Planner</li></Link>
                <Link to='/blog'><li>Blog</li></Link>
                <Link to='/feedback'><li>Feedback</li></Link>
            </ul>

            <button className='btn'>Sign In</button>
            <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross /> : <FaBars />}
            </button>


        </nav>
    )
}

export default Navbar
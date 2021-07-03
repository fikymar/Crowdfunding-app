import React, { useState } from 'react'
import logo from '../imgs/logo.svg'
import hamburgerIcon from '../imgs/icon-hamburger.svg'
import closeIcon from '../imgs/icon-close-menu.svg'

const Nav = () => {
    const [hamburger, setHamburger] = useState(false);

    const handleHamburger = (e) => {
        setHamburger(!hamburger)
        if (!hamburger) {
            e.target.src = closeIcon; 
        }
    }

    //console.log(window.innerWidth)
    return (
        <div className='nav'>
            <img className='logo' src={logo} alt="logo" />
            <nav className={ `nav_list ${hamburger ? '' : 'hiddenNav'}`}>
                <a href="/">About</a>
                <a href="/">Discover</a>
                <a href="/">Get Started</a>
            </nav>
            {window.innerWidth <= 800 ? 
                <img className='hamburgerLogo' src={hamburgerIcon} alt='hamburger' onClick={(e) => handleHamburger(e) }/> : null }
        </div>
    )
}

export default Nav

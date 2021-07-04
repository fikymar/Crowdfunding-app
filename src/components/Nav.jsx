import React, {  useState } from 'react'
import logo from '../imgs/logo.svg'
import hamburgerIcon from '../imgs/icon-hamburger.svg'
import closeIcon from '../imgs/icon-close-menu.svg'

const Nav = () => {
    const [hamburger, setHamburger] = useState(false);
    const [size, setSize] = useState(window.innerWidth)
   
    const windowSize = () => {
        setSize(window.innerWidth)
    }
    window.addEventListener('resize', windowSize )
   

    const handleHamburger = (e) => {
        setHamburger(!hamburger)
        if (!hamburger) {
            e.target.src = closeIcon; 
        }
    }

   
    return (
        <div className='nav'>
            <img className='logo' src={logo} alt="logo" />
            <nav className={ `nav_list ${hamburger ? '' : 'hiddenNav'}`}>
                <a href="/#about">About</a>
                <a href="/">Discover</a>
                <a href="/">Get Started</a>
            </nav>
            {size <= 800 ? 
                <img className='hamburgerLogo' src={hamburgerIcon} alt='hamburger' title='menu' onClick={(e) => handleHamburger(e) }/> : null }
        </div>
    )
}

export default Nav

import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
    return (
        <div className='main-nav'>
            <NavLink to='/'><h1 className="main-color logo">F.v<span className="orange">_</span></h1></NavLink>
            <ul className='nav-list'>
                <li><NavLink to='/projects'>Projects_</NavLink></li>
                <li><NavLink to='/articles'>Articles_</NavLink></li>
                <li><NavLink to='/about'>About_Me_</NavLink></li>
            </ul>
        </div>
    )
}

export default MainNav

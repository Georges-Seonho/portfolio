import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
    return (
        <div>
            <NavLink to='/'><h1>François_Georges_Vieux_</h1></NavLink>
            <ul>
                <li><NavLink to='/projects'>Projects_</NavLink></li>
                <li><NavLink to='/articles'>Articles_</NavLink></li>
                <li><NavLink to='/about-me'>About_Me_</NavLink></li>
            </ul>
        </div>
    )
}

export default MainNav

import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export default function Navbar() {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <div className="container">
                <nav className={`nav ${clicked ? 'clicked' : ''}`}>
                    <div className='mobile-head'>
                        <Link to="/" className="site-title">
                            Mg.
                        </Link>
                        <div id="mobile">
                            <i
                                id="bar"
                                className={`icon ${clicked ? 'clicked' : ''}`}
                                onClick={() => setClicked(!clicked)}
                            >
                                {clicked ? <IoClose /> : <FaBars />}
                            </i>
                        </div>
                    </div>
                    <ul className="links">
                        <CustomLink to="/about">About</CustomLink>
                        <CustomLink to="/portfolio">Portfolio</CustomLink>
                        <CustomLink to="/resume">Resume</CustomLink>
                        <CustomLink to="/contact">Contact</CustomLink>
                    </ul>
                </nav>
            </div>
        </>
    );
}


function CustomLink( {to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch( {path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
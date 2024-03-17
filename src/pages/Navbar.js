import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className="nav nav-tabs bg-dark justify-content-center mb-3">
            <li className="nav-item ">
                <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" to="/findrecipe">Finder</Link>
            </li>
        </ul>
    );
};

export default Navbar;
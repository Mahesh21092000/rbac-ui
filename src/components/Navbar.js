import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className='heading'>RBAC Dashboard</h1>
            <ul className='nav-menu'>
                <li><Link to="/"  className="link">Users</Link></li>
                <li><Link to="/roles" className="link">Roles</Link></li>
                <li><Link to="/permission" className="link">Permission Management</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
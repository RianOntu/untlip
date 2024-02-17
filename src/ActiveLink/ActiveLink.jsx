import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css';

const ActiveLink = ({to,children,className}) => {
    return (
       <NavLink to={to} className={({isActive})=>isActive?`active ${className}`:`${className}`}>
        {children}
       </NavLink>
    );
};

export default ActiveLink;
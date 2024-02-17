import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css';

const ActiveLink1 = ({to,children,className}) => {
    return (
       <NavLink to={to} className={({isActive})=>isActive?`active1 ${className}`:`${className}`}>
        {children}
       </NavLink>
    );
};

export default ActiveLink1;

import React from "react";
import './Logo.css';
import logo from '../../assets/images/logo.png';

const Logo = props => (
    <div className="Logo">
        <img src={logo} alt="Logo" />
    </div>
);

export default Logo;

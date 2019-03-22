import React from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem to="/" exact>Home</NavigationItem>
        <NavigationItem to="/about" exact>About</NavigationItem>
        <NavigationItem to="/contacts" exact>Contacts</NavigationItem>
        <NavigationItem to="/team" exact>Team</NavigationItem>
        <NavigationItem to="/admin" exact>Admin</NavigationItem>
    </ul>
);

export default NavigationItems;

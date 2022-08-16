import React from 'react';
import stl from './Header.module.scss'
import Nav from "./Nav/Nav";

const Header = () => {
    return (
        <div className={stl.wrapper}>
            <Nav/>
        </div>
    );
};

export default Header;
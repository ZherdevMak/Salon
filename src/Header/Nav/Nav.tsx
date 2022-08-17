import React from 'react';
import stl from './Nav.module.scss'
import menu from '../../Assets/images/menu-icon.png'

const Nav = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.container}>
                <div className={stl.textContainer}>
                    <h1 className={stl.text}>SALON SAFARI</h1>
                </div>
                <div className={stl.iconWrapper}>
                        <img src={menu} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Nav;
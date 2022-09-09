import React from 'react';
import stl from './MobileMenu.module.scss'
const MobileMenu = () => {
    return (
        <div className={stl.MenuWrapper}>
            <ul className={stl.ulContainer}>
                <li className={stl.liContainer}><a className={stl.linkContainer} href="">home</a></li>
                <li className={stl.liContainer}><a className={stl.linkContainer} href="">the salon</a></li>
                <li className={stl.liContainer}><a className={stl.linkContainer} href="">services</a></li>
                <li className={stl.liContainer}><a className={stl.linkContainer} href="">salon services</a></li>
                <li className={stl.liContainer}><a className={stl.linkContainer} href="">spa services</a></li>
                <li className={stl.liContainer}><a className={stl.linkContainer} href="">bridal services</a></li>
                <li className={stl.liContainer}><a className={stl.linkContainer} href="">contact us</a></li>
                <li className={stl.lastLi}></li>
            </ul>
        </div>
    );
};

export default MobileMenu;
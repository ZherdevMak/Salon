import React, {useState} from 'react';
import stl from './Nav.module.scss'
import menu from '../../Assets/images/menu-icon.png'
import MobileMenu from "./MobileMenu/MobileMenu";

const Nav = () => {
    const [menuStatusOpen, menuStatusSet] = useState<boolean>(false)

    function menuToggle() {
        menuStatusSet(!menuStatusOpen)
        console.log(menuStatusOpen)
    }
if (menuStatusOpen) {
    return (
        <div className={stl.wrapper}>
            <div className={stl.container}>
                <div className={stl.textContainer}>
                    <h1 className={stl.text}>SALON SAFARI</h1>
                </div>
                <div className={stl.iconWrapperClosed}>
                    <img onClick={menuToggle} src={menu} alt=""/>
                    <MobileMenu/>
                </div>
            </div>

        </div>
    );
} else {
    return (
        <div className={stl.wrapper}>
            <div className={stl.container}>
                <div className={stl.textContainer}>
                    <h1 className={stl.text}>SALON SAFARI</h1>
                </div>
                <div className={stl.iconWrapperOpen}>
                    <img onClick={menuToggle} src={menu} alt=""/>
                </div>
            </div>

        </div>
    );
}
};

export default Nav;
import React, {useState} from 'react';
import stl from './Header.module.scss'
import Nav from "./Nav/Nav";

const Header = () => {
    const [visible,setVisible] = useState<boolean>(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        })};

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className={stl.wrapper}>
            <Nav/>
            <button className={stl.buttonScroll} onClick={scrollToTop}
                    style={{opacity: visible ? '1' : '0', transition: 'opacity 0.3s linear .2s'}} />
        </div>
    );
};

export default Header;
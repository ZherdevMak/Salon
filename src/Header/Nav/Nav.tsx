import React from 'react';
import stl from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={stl.wrapper} >
            <h1 className={stl.container}>
                <h1 className={stl.text}>
                    SALON SAFARI
                    </h1>
            </h1>

        </div>
    );
};

export default Nav;
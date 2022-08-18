import React from 'react';
import stl from './SliderTitle.module.scss'

const SliderTitle = () => {
    return (
        <section className={stl.SliderTitle}>
            <div className={stl.container}>
                <div className={stl.TextContainer}>
                    <h1 className={stl.Text}>SALON SAFARI</h1>
                </div>
                <div className={stl.discriptionContainer}>
                    <a className={stl.buttonCall} href="">CALL NOW</a>
                    <p className={stl.discript}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
                        debitis eveniet modi neque quaerat reiciendis rerum voluptas? Doloribus facere fugit mollitia,
                        perspiciatis placeat tempora unde?</p>
                    <p className={stl.discript}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci
                        aliquam aspernatur aut exercitationem, laborum minus quasi quisquam reiciendis vel. Explicabo
                        libero quisquam totam ullam!</p>
                </div>
            </div>
        </section>
    );
};

export default SliderTitle;
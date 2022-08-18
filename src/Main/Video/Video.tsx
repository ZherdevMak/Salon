import React from 'react';
import stl from './Video.module.scss'

const Video = () => {
    return (
        <section className={stl.Video}>
            <div className={stl.container}>
                <div className={stl.frameWrapper}>
                    <iframe className={stl.frame} width="560" height="315"
                            src="https://www.youtube.com/embed/9f3cvG7hwos" frameBorder="0"
                            allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>

                <div className={stl.TextContainer}>
                    <h2 className={stl.Text}>SALON SAFARI</h2>
                </div>
                <div className={stl.discriptionContainer}>
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

export default Video;
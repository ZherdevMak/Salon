import React from 'react';
import stl from './Salon.module.scss'
import photo1 from "../../Assets/images/photo-1.jpg"
import photo2 from "../../Assets/images/photo-2.jpg"
import photo3 from "../../Assets/images/photo-3.jpg"

const Salon = () => {

    return (
        <section className={stl.Salon}>
            <div className={stl.container}>
                <div className={stl.TextContainer}>
                    <h3 className={stl.Text}> Over 40 years of service in the city of Brampton</h3>
                </div>
                <div className={stl.imageContainer}>
                    <img className={stl.image} src={photo1} alt="Salon Interior"/>
                    <img className={stl.image} src={photo2} alt="Salon hall"/>
                    <img className={stl.image} src={photo3} alt="Towels"/>
                </div>
            </div>

        </section>

    );
};

export default Salon;
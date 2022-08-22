import React from 'react';
import stl from './Services.module.scss'
import photo4 from '../../Assets/images/photo-4.jpg'

const Services = () => {
    return (
        <section className={stl.Services}>
            <div className={stl.container}>
                <div className={stl.TextContainer}>
                    <h2 className={stl.Text}>OUR SERVICES</h2>
                </div>
                <div className={stl.SecondTextContainer}>
                    <h3 className={stl.SecondText}>SALON SERVICES</h3>
                </div>
                <div>
                    <img className={stl.SalonServicesImage} src={photo4} alt="Beautiful hair"/>
                </div>

            </div>
        </section>
    );
};

export default Services;
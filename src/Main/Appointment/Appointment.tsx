import React from 'react';
import stl from './Appointment.module.scss'
import photo1 from "../../Assets/images/photo-1.jpg"
import photo2 from "../../Assets/images/photo-2.jpg"
import photo3 from "../../Assets/images/photo-3.jpg"

const Appointment = () => {
    return (
        <section className={stl.Appointment}>
            <div className={stl.container}>
                <div className={stl.TextContainer}>
                    <h2 className={stl.Text}>make an appointment</h2>
                    <p>Call us now to book an appointment with one of our hair stylist!</p>
                </div>
                <div className={stl.imageContainer}>
                    <img className={stl.image} src={photo1} alt="salon interior"/>
                    <img className={stl.image} src={photo2} alt="salon hall"/>
                    <img className={stl.image} src={photo3} alt="towels"/>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
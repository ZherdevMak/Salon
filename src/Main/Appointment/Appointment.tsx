import React from 'react';
import stl from './Appointment.module.scss'

const Appointment = () => {
    return (
        <section className={stl.Appointment}>
            <div className={stl.container}>
                <div className={stl.TextContainer}>
                    <h2 className={stl.Text}>make an appointment</h2>
                    <p className={stl.descriptionText}>Call us now to book an appointment with one of our hair stylist!</p>
                </div>
                <a className={stl.callButton} href="tel:+79689471982">Call Now</a>
            </div>
        </section>
    );
};

export default Appointment;
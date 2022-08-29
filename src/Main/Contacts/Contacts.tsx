import React from 'react';
import stl from './Contacts.module.scss'

const Contacts = () => {
    return (
        <section className={stl.Contacts}>
            <div className={stl.container}>
                <div className={stl.TextContainer}>
                    <h3 className={stl.Text}> Contact</h3>
                </div>
                <div className={stl.mapWrapper} style={{width: '100%'}}>
                    <iframe width="100%" height="600" frameBorder="0" scrolling="no"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/sport-gps/">hiking gps</a></iframe>
                </div>
                <div className={stl.addresContainer}>
                    <p className={stl.addresText}>The Wanless Plaza, 10886 Hurontario St.,
                        <br/>
                        Brampton, Ontario, L7A 3R9
                    </p>
                    <p className={stl.addresText}>Email -
                        <a href="mailto:salonsafari@rogers.com">salonsafari@rogers.com</a>
                        <br/>
                        Phone - (905 846 3111)
                    </p>
                    <a href="https://www.facebook.com/SalonSafariandSpa/" className={stl.facebookRef}></a>
                </div>
                <div className={stl.workHoursContainer}>
                    <h3 className={stl.workHoursText}>Hours of Operation</h3>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
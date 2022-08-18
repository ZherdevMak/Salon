import React from 'react';
import first1 from '../../Assets/images/fist1.jpg'
import first2 from '../../Assets/images/fist2.jpg'
import stl from './Slider.module.scss'
import {Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const images = [
    first1,
    first2
];
const Slider = () => {
    return (
        <div className={stl.wrapper}>
            <div className={"slide-container"}>
                <Zoom scale={0.4} indicators={false} arrows={false} duration={5000}>
                    {images.map((each, index) => (
                        <div key={index} style={{width: "100%"}}>
                            <img style={{objectFit: "cover", width: "100%", height: '47vh'}} alt="Slide Image"
                                 src={each}/>
                        </div>
                    ))}
                </Zoom>
            </div>
        </div>

    );
};

export default Slider;
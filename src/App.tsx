import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Slider from "./Main/Slider/Slider";
import SliderTitle from "./Main/SliderTitle/SliderTitle";
import Video from "./Main/Video/Video";
import Salon from "./Main/Salon/Salon";
import Exellence from "./Main/Exellence/Exellence";
import Services from "./Main/Services/Services";
import Appointment from "./Main/Appointment/Appointment";

function App() {
    return (
        <div className="App">
            <Header/>
            <Slider/>
            <SliderTitle/>
            <Video/>
            <Salon/>
            <Exellence/>
            <Services/>
            <Appointment/>
            <Appointment/>

        </div>
    );
}

export default App;

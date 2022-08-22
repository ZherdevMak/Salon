import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Slider from "./Main/Slider/Slider";
import SliderTitle from "./Main/SliderTitle/SliderTitle";
import Video from "./Main/Video/Video";
import Salon from "./Main/Salon/Salon";
import Exellence from "./Main/Exellence/Exellence";

function App() {
    return (
        <div className="App">
            <Header/>
            <Slider/>
            <SliderTitle/>
            <Video/>
            <Salon/>
            <Exellence/>
        </div>
    );
}

export default App;

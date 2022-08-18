import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Slider from "./Main/Slider/Slider";
import SliderTitle from "./Main/SliderTitle/SliderTitle";

function App() {
    return (
        <div className="App">
            <Header/>
            <Slider/>
            <SliderTitle/>
        </div>
    );
}

export default App;

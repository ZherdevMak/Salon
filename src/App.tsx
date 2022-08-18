import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Slider from "./Main/Slider/Slider";
import SliderTitle from "./Main/SliderTitle/SliderTitle";
import Video from "./Main/Video/Video";

function App() {
    return (
        <div className="App">
            <Header/>
            <Slider/>
            <SliderTitle/>
            <Video/>
        </div>
    );
}

export default App;

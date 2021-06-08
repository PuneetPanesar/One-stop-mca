import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import MainNavigation from './components/Navigation/MainNavigation';
import ImageSlider from './shared/UIElements/ImageSlider';
import VideoSlider from './shared/UIElements/VideoSlider';
import Contacts from './shared/UIElements/Contacts';

function App() {
  return (
    <div className="main">
      <Router>
      <MainNavigation/>
      <div classNmae="image-slider">
        <ImageSlider /> 
      </div>
      <div className="video-slider">
        <VideoSlider/>
      </div>
      <Contacts />
        <Route to="/"> 
        </Route>
     </Router>
      
    </div>
  );
}

export default App;

import React,{useContext ,useState} from 'react';
import {BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import './App.css';
import QuizHolder from './components/QuizHolder';
import AuthContext from './components/store/auth-context';
import AuthPage from './pages/AuthPage';
import AboutUs from './components/About_Us/AboutUs';

import MainNavigation from './components/Navigation/MainNavigation';
import ImageSlider from './shared/UIElements/ImageSlider';
import VideoSlider from './shared/UIElements/VideoSlider';
import Contacts from './shared/UIElements/Contacts';

import Home from './components/QuizCom/Home'
import GlobalStyle from './components/QuizCom/globalStyles'

import Cards from './components/Cards/Cards';
import Faq from './components/faq/Faq';
import Computer from './components/CompComponent/Computer';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="main">
      <Router>
        <Switch>
        <Route path="/quiz" exact>
          <QuizHolder/>
          </Route>
          <Route path="/computer" exact>
          <MainNavigation />
          <Computer/>
          <Contacts />
          </Route>
          <Route path="/faq">
          <MainNavigation />
          <Faq/>
         
          <Contacts />
        
          
          </Route>
          <Route path="/aboutus">
          <MainNavigation />
          <AboutUs/>
          </Route>
         {!authCtx.isLoggedIn &&
            (<Route path="/auth" exact>
               <MainNavigation />
              <AuthPage />
            </Route>)}
          {authCtx.isLoggedIn && <Route path="/">
          <MainNavigation />
            <div className="image-slider">
              <ImageSlider />
            </div>
            <div >
              <VideoSlider />
            </div>
            <GlobalStyle/>
            <Home></Home>
            <Cards></Cards>
            <Contacts />
          </Route>}
          <Route path='*'>
            {authCtx.isLoggedIn && <Redirect to='/' />}
            {!authCtx.isLoggedIn && <Redirect to='/auth' />}
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;

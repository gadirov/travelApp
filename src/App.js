import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import HomePageMain from './components/HomePage/Main'
import MainDestination from './components/Destination/MainDestination';
import MainDestinationItaly from './components/DestinationItaly/MainDestinationItaly';
import MainAbout from './components/About/MainAbout';
import MainFag from './components/Fag/MainFag';
import MainBlog from './components/Blog/MainBlog'
import MainContact from './components/Contact/MainContact'
import SignIn from './pages/SignIn';
import SignInMain from '..//src/components/SignIn/main'
import ForgotPasswordMain from './components/ForgotPassword/ForgotPassword';
import CreateAccount from './components/CreateAccount/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Homepage />}>
          <Route index element={ <HomePageMain />} />
          <Route path='destination'>
            <Route  index element={ <MainDestination /> } />
            <Route path='italy' element={ <MainDestinationItaly/> }/>
          </Route>
          <Route path='about'  element={ <MainAbout /> }/>
          <Route path='fag'  element={ <MainFag /> }/>
          <Route path='blog'  element={ <MainBlog /> }/>
          <Route path='contact'  element={ <MainContact /> }/>
        </Route>

        <Route path="/signin" element= { <SignIn /> } >
          <Route index element= { <SignInMain /> } />
          <Route path='forgot-password' element={ < ForgotPasswordMain /> }/>
          <Route path='create-account' element={ < CreateAccount /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


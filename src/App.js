import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pages from './pages/Pages'
import HomePage from './components/HomePage/Main'
import Destination from './components/Destination/MainDestination';
import DestinationItaly from './components/DestinationItaly/MainDestinationItaly';
import About from './components/About/MainAbout';
import Fag from './components/Fag/MainFag';
import Blog from './components/Blog/MainBlog'
import Contact from './components/Contact/MainContact'
import SignIn from './pages/SignIn';
import SignInMain from '..//src/components/SignIn/main'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Pages />}>
            <Route index element={ <HomePage />} />
            <Route path='destination'>
              <Route  index element={ <Destination /> } />
              <Route path='italy' element={ <DestinationItaly/> }/>
            </Route>
            <Route path='about'  element={ <About /> }/>
            <Route path='fag'  element={ <Fag /> }/>
            <Route path='blog'  element={ <Blog /> }/>
            <Route path='contact'  element={ <Contact /> }/>
        </Route>

        <Route path="/signin" element= { <SignIn /> } >
            <Route index element= { <SignInMain /> } />
            <Route path='forgot-password' element={ < ForgotPassword /> }/>
            <Route path='create-account' element={ < CreateAccount /> }/>
        </Route>
        <Route path='*' element={< Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


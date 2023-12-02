import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Component/NavBar.js';
import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Contact />
      <Home />
      <Footer />
    </>

    // <Router>
    //   <NavBar />
    //   <Header />
    //   <Switch>
    //     <Route path='/about'>
    //       <About />
    //     </Route>
    //     <Route path='/contact'>
    //       <Contact />
    //     </Route>
    //     <Route path='/home'>
    //       <Home />
    //     </Route>
    //     <Footer />
    //   </Switch>
    // </Router>
  );
}

export default App;

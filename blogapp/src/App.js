import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NavBar from './Component/NavBar.js';
import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import Post from './Component/Post.js';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       auth: false,
    }
  }
  

  authHandler = () =>{
    this.setState({auth: !this.state.auth})
    // alert('hello');
  };

  render() {
    return (
      <>
        <Router>
          <NavBar login={this.loginHandler} status={this.state.auth} />
          <Switch>
            <Route path='/Contact'>
              <Header title="Man must explore, and this is exploration at its greatest " img="contact-bg.jpg" />
              <Contact />
            </Route>
            <Route path='/about'>
              <Header title="About Us" img="about-bg.jpg" />
              <About />
            </Route>
            <Route path='/Post'>
              {this.state.auth === false ? (<Redirect to="/" />) : (<> <Header title="Man must explore, and this is exploration at its greatest " img="post-bg.jpg" />
              <Post /> </>)}
            </Route>
            <Route path='/'>
              <Header title="Wscube Tech" img="home-bg.jpg" />
              <Home />
            </Route>
            <Route path='*'>
              <Header title="404 pafe not found" img="404-bg.jpg" />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>

    );
  }
}

export default App;

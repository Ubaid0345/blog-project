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
import axios from './Services/Instance.js';
import Post from './Component/Post.js';
import PostPreview from './Component/PostPreview.js';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       auth: false,
       post: null,
    }
    // console.log('[app] constructor')
  }

  componentDidMount(){
    axios.get('posts')
    .then((response)=>{
      this.setState({post: response.data}, ()=>console.log());
      // console.log(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  loginHandler = () =>{
    this.setState({auth: !this.state.auth})
    // alert('hello');
  };

  deleteHandler = (id) => {
    axios.delete('posts/' + id )
    .then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }

  // static gerDerivedStateFromProps(props, state){
  //   console.log('[App] gerDerivedStateFromProps');
  //   return null
  // }

  // componentDidMount(){
  //   this.setState({auth:true})
  //   console.log('[App] componentDidMount');
  // }

  render() {
    let post = null;
    if(this.state.post != null){
      console.log(post);
      const tenPost = this.state.post.splice(10,20);
      console.log(tenPost);
       post = this.state.post.map(Post => {
        return <PostPreview delete={() => this.deleteHandler(post.id)} key={post.id} title={post.title} body={post.body} />
      })
    }
    // console.log('[App] render');
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
              {this.state.auth === false ? (<Redirect to="/" />): (
              <> <Header title="Man must explore, and this is exploration at its greatest " img="post-bg.jpg" />
              <Post /> </>
                )} 
            </Route>
            <Route path='/'>
              <Header title="Wscube Tech" img="home-bg.jpg" />
              <Home>
                {this.post}
              </Home>
            </Route>
            <Route path='*'>
              <Header title="404 page not found" img="404-bg.jpg" />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>

    );
  }
}

export default App;

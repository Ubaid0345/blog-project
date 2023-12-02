import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar(props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light fixed-top' id='mainNav'>
        <div className='container'>
            <link className='navbar-brand' to="/">
                Start Studying
            </link>
            <button className='navbar-toggler navbar-toogler-right' type='button' data-toggle='collapse' data-target="#navbarResponsive" aria-controls='navbarRsposive' aria-expanded='false' aria-label='Toggle navigation'>
                Menu
                <i className='fas fa-bars'></i>
            </button>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <link className='nav-link' to='/'>
                            Home
                        </link>
                    </li>
                    <li className='nav-item'>
                        <link className='nav-link' to='/about'>
                            About
                        </link>
                    </li>
                    <li className='nav-item'>
                        <link className='nav-link' to='/post'>
                            Sample Post
                        </link>
                    </li><li className='nav-item'>
                        <link className='nav-link' to='/contact'>
                            Contact
                        </link>
                    </li>
                    <li className='nav-item'>
                        <Link onCLick={props.login}>{props.status ? "Logout" : "Login"} </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

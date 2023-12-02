import React from 'react'

export default function Header(props) {
  return (
    <header className='masthead' style={{backgroundImage:'url("img/ '+ props.img +' ")'}}>
        <div className='overlay'></div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-10 mx-auto'>
                    <div className='page-heading'>
                        <h1>{props.title} </h1>
                        <span className='subheading'>A blog theme by start </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
  ) 
}

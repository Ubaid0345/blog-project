import React from 'react'
import { Link, useRoutesMatch, Switch, Route, useParams } from 'react-router-dom'

export default function Post() {
  let { path, url } = useRoutesMatch();
  // console.log(useRoutesMatch());
  return (
    <>
      <article>
        <div className='container'>
          <div className='row'>
            <ul className='list-group'>
              <li className='list-group-item d-flex justify-content-between       align-item-center'>
                <Link to={url}>blog item </Link>
              </li>
              <li className='list-group-item d-flex justify-content-between align-item-center'>
                <Link to={`${url}/1`}>page 1 </Link>
              </li>
              <li className='list-group-item d-flex justify-content-between align-item-center'>
                <Link to={`${url}/2`}>page 2 </Link>
              </li>
              <li className='list-group-item d-flex justify-content-between align-item-center'>
                <Link to={`${url}/3`}>page 3 </Link>
              </li>
            </ul>
            <div className='col-lg-8 col-md-10 mx-auto'>
              <Switch>
                <Route exact path={path}>
                  <p>
                    the quick brown fox jump over the lazy dog. the quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dog
                  </p>
                  <p>
                    the quick brown fox jump over the lazy dog. the quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dog
                  </p>
                  <h2 className='section-heading'>the final frintier</h2>
                  <p>
                    the quick brown fox jump over the lazy dog. the quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dog
                  </p>
                  <p>
                    the quick brown fox jump over the lazy dog. the quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dog
                  </p>
                  <blockquote className='blockquote'>
                    the quick brown fox jump over the lazy dog. the quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dog
                  </blockquote>
                  <p>
                    the quick brown fox jump over the lazy dog. the quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dog
                  </p>
                  <h2 className='section-heading'>the final frintier</h2>
                  <p>
                    the quick brown fox jump over the lazy dog. the quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dog
                  </p>
                  <a href='#' >
                    <img className='img-fluid' src='img/post-sample-image.jpg' alt='' />
                  </a>
                  <span className='option text-muted'>
                    the quick brown fox jump over the lazy dog the quick brown fox jump over the lazy dog the quick brown fox jump over the lazy dog the quick brown fox jump over the lazy dog 
                  </span>
                  <p>
                    the quick brown fox jump over the lazy dog. the quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dogthe quick brown fox jump over the lazy dog
                  </p>
                  <p>
                    placeholder text by
                    <a href='http://spaceipsum.com/'>spaceipsum</a> photograph by
                    <a href='http://www.flickr.com/photos/nasacommons/'></a>
                  </p>
                </Route>
                <Route path={`${path}/:id`}>
                  <Topic></Topic>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </article>
      <hr />
    </>
  )
}

function Topic (){
  let {id} = useParams();
  if(id == 1) return <p>hello</p>
  if(id == 2) return <p>hi</p>
  if(id == 3) return <p>wscube</p>
  return(
    <p>hello</p>
  )
}
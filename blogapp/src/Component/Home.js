import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-10 mx-auto'>
                        <div className='post-preview'>
                            <a href='post.html'>
                                <h2 className='post-title'>
                                    man must explore, and this is exploration at its greatest
                                </h2>
                                <h3 className='post-subtitle'>
                                    problems look mighty small from 150 miles up
                                </h3>
                            </a>
                            <p className='post-meta'>
                                <a href='#'>
                                    Start
                                </a>
                                on september 14 aug,
                            </p>
                        </div>
                        <hr />
                        <div className='post-preview'>
                            <a href='post.html'>
                                <h2 className='post-title'>
                                    science has not yet mastered prophecy
                                </h2>
                                <h3 className='post-subtitle'>
                                    we predict to much for the next year and yet far  too title for the next ten.
                                </h3>
                            </a>
                            <p className='post-meta'>posted by 
                                <a href='#'>
                                    Start
                                </a>
                                on july 08
                            </p>
                        </div>
                        <hr />
                        <div className='post-preview'>
                            <a href='post.html'>
                                <h2 className='post-title'>
                                    failure is not an option 
                                </h2>
                                <h3 className='post-subtitle'>
                                    many say exploration is part our destiny, but it's actually out duty to future generation
                                </h3>
                            </a>
                            <p className='post-meta'>posted by 
                                <a href='#'>
                                    Start
                                </a>
                                on july 08
                            </p>
                        </div>
                        <div className='clearfix'>
                            <a className='btn btn-primary float-right' href='#'>older posts &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

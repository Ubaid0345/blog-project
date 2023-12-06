import React from 'react'
import axios from 'axios';

export default function CreatePost() {
    const submitHandler = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        const author = event.target.author.value;
        const data = {title, body, author,}
        axios.post('posts', data
        // {
        //     title,
        //     body,
        //     author,
        // }
        ).then((response)=>{
            console.log(response);
            event.target.reset()
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-10 mx-auto'>
                        <p>
                            Create a Post
                        </p>
                        <form name='sentMessage' id='contactForm' onSubmit={submitHandler}>
                            <div className='control-group'>
                                <div className='form-group floating-label-form-group controls'>
                                    <label>Title</label>
                                    <input type='text' className='form-control' placeholder='title' id='title' name='title' />
                                    <p className='help-check text-danger'></p>
                                </div>
                            </div>
                            <div className='control-group'>
                                <div className='form-group floating-label-form-group controls mt-3'>
                                    <label>body</label>
                                    <textarea id='body' className='form-control' placeholder='body' name='body'></textarea>
                                    <P className='help-check text-danger'> </P>
                                </div>
                            </div>
                            <div className='control-group'>
                                <div className='form-group floating-label-form-group controls mt-3'>
                                    <label>author</label>
                                    <textarea id='author' className='form-control' placeholder='author' name='author' required></textarea>
                                    <P className='help-check text-danger'> </P>
                                </div>
                            </div>
                            <br />
                            <button type='submit' className='btn btn-primary' id='sendMessageButton'>send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'

export default function Footer() {
  return (
   <footer>
        <div>
            <div>
                <ul>
                    <li>
                        <a href='#'>
                            <span>
                                <i className='fas fa-circle fa-stack-2x'></i>
                                <i className='fab fa-twitter fa-stack-1x fa-inverse'></i>
                            </span>
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='#'>
                            <spna className='fa-stack fa-lg'>
                                <i className='fas fa-circle fa-stack-2x '></i>
                                <i className='fab fa-facebook-f fa-stack-1x fa-inverse'></i>
                            </spna>
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='#'>
                            <spna className='fa-stack fa-lg'>
                                <i className='fas fa-circle fa-stack-2x '></i>
                                <i className='fab fa-github fa-stack-1x fa-inverse'></i>
                            </spna>
                        </a>
                    </li>
                </ul>
                <p>Copyright &copy; your website 2023</p>
            </div>
        </div>
   </footer>
  )
}

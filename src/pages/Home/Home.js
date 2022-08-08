import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {

    return (
        <body>
            <div className='home-header bg-transparent'>  
                <Link to='/'> <h1 className='logo'><strong>Y O G A</strong></h1> </Link>
            </div>
            <div class="container">
                <div class="row-align-items-center">
                    <div class="col-8">
                        <h1 className="description">YOGA POSE ESTIMATION</h1>
                    </div>
                </div>
                <div class="row-align-items-center">
                    <div class="col-4">
                        <p>yoga pose estimation is an application that can detect good and correct yoga movements consisting of several yoga poses, including: chair, tree, warrior, triangle, and cobra </p>
                    </div>
                </div>
                <div class="row-justify-content-center">
                    <div className="btn-section">
                    <Link to='/start'>
                        <button className="btn start-btn"> <strong>Let's Start</strong></button>
                    </Link>
                    </div>
                </div>
            </div>
    </body>
    )
}

import React from 'react'
import './style/questions.css'
import { Button } from 'react-bootstrap'
import logo20 from './assets/20.jpg'

function Questions() {
    return (
        <div className="img-container pt-4">
            <img src={logo20} alt='' />
            <h1>Questions <br />
                about <br />
                hosting?</h1>
            <a href='/askSuperHost'><Button className="btn-text2 px-5 py-3" variant="light">Ask a Superhost</Button></a>


        </div>
    )
}

export default Questions

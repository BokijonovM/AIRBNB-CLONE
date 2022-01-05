import React from 'react'
import './style/questions.css'
import { Button } from 'react-bootstrap'

function Questions() {
    return (
        <div className="img-container pt-4">
            <img src='https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='' />
            <h1>Questions <br />
                about <br />
                hosting?</h1>
            <a href='/askSuperHost'><Button className="btn-text2 px-5 py-3" variant="light">Ask a Superhost</Button></a>


        </div>
    )
}

export default Questions

import React from 'react'
import './style/questions.css'
import { Button } from 'react-bootstrap'

function Questions() {
    return (
        <div className="img-container">
            <img src='https://images.unsplash.com/photo-1429277096327-11ee3b761c93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80' alt='' />
            <h1>Questions <br />
                about <br />
                hosting?</h1>

            <Button className="btn-text2 px-5 py-3" variant="light">Ask a Superhost</Button>
        </div>
    )
}

export default Questions

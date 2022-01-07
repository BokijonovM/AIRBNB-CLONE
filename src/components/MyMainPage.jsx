import React from 'react'
import './style/MyMain.css'
import logo18 from './assets/18.jpg'
import { Button } from 'react-bootstrap'

function MyMainPage() {
    return (
        <div className=" img-div-main">
            <img className="main-img" src={logo18} alt="" />

            {/* <h1 className="main-text">Not sure where to go? Perfect.</h1> */}
            <div className="main-text-main-page">
                <h1 className='mx-5'>Not sure where to go? Perfect.</h1>
                <Button className='i-am-flexible' variant="danger">I'm flexible</Button>
            </div>




        </div>
    )
}

export default MyMainPage

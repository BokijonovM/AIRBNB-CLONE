import React from 'react'
import logo from './images/gift.png'
import { Button } from 'react-bootstrap'

function GiftCards() {
    return (
        <div className='gift-main-cont'>
            <div className='gift-cont'>
                <div className='gift-text-cont'>
                    <h4 style={{ color: "black" }}>Introducing</h4>
                    <h1 classNme='pt-5' style={{ color: "black", marginBottom: "0px" }}>Airbnb</h1>
                    <h1 style={{ color: "black" }}>gift cards</h1>
                    <a href='giftCards'><Button className='px-4 py-2' style={{ fontWeight: "bolder" }} variant="dark">Shop now</Button></a>
                </div>
                <div>
                    <img className='gift-img' src={logo} alt='' ></img>
                </div>
            </div>
        </div >
    )
}

export default GiftCards

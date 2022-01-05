import React from 'react'
import MyFooter from './MyFooter'
import logo from './images/logo1.svg'
import { Button, Navbar } from 'react-bootstrap'
import logo1 from './images/gift1.png'

function GiftPage() {
    return (
        <>
            <div>
                <Navbar expand="lg" variant="light" bg="light" className="my-nav-p2 d-flex justify-content-between shadow bg-body">
                    <Navbar.Brand className='p-0 pl-5' href="#"><a href='/'><img src={logo} alt=''></img></a></Navbar.Brand>
                    <div className="buttons-container pr-5">
                        <h6 className='gift-redeem'>Redeem</h6>
                        <Button style={{ color: "white", fontWeight: "bolder" }} className="buttons-gift py-2 px-3" variant="danger">Buy gift card</Button>
                    </div>
                </Navbar>
            </div>
            <div className='gift-i-text-cont'>
                <h6 className='gift-i-text airbnb-text-gift-i'>Airbnb</h6>
                <h6 className='gift-i-text'>gift cards</h6>
            </div>
            <div className='w-100 d-flex justify-content-center'>
                <img className='gift-i-card-img' src={logo1} alt=''></img>
            </div>
            <div>
                <MyFooter />
            </div>
        </>
    )
}

export default GiftPage

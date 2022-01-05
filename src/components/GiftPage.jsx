import React from 'react'
import MyFooter from './MyFooter'
import logo from './images/logo1.svg'
import { Button, Navbar } from 'react-bootstrap'
import logo1 from './images/gift1.png'
import GiftPageCards from './GiftPageCards'


function GiftPage() {
    return (
        <>
            <div>
                <Navbar expand="lg" variant="light" bg="light" className="my-nav-p2 d-flex justify-content-between shadow bg-body">
                    <Navbar.Brand className='p-0 pl-5' href="#"><a href='/'><img src={logo} alt=''></img></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='' id="basic-navbar-nav">
                        <div className="buttons-container ml-auto pr-5">
                            <h6 className='gift-redeem'>Redeem</h6>
                            <Button style={{ color: "white", fontWeight: "bolder" }} className="buttons-gift py-2 px-3" variant="danger">Buy gift card</Button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className='gift-i-text-cont'>
                <h6 className='gift-i-text airbnb-text-gift-i'>Airbnb</h6>
                <h6 className='gift-i-text'>gift cards</h6>
            </div>
            <div className='w-100 d-flex justify-content-center'>
                <img className='gift-i-card-img' src={logo1} alt=''></img>
            </div>
            <div className='text-cont-i-2'>
                <h1 className='text-cont-i-2-2'>Easy to give. Easy to love.</h1>
                <h1>Never expires.</h1>
                <GiftPageCards />
            </div>
            <div className='mt-4'>
                <MyFooter />
            </div>
        </>
    )
}

export default GiftPage

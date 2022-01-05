import React from 'react'
import MyFooter from './MyFooter'
import logo from './images/logo1.svg'
import { Button, Navbar } from 'react-bootstrap'
import logo1 from './images/gift1.png'
import GiftPageCards from './GiftPageCards'
import logo5 from './assets/5.jpg'

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
            <div className='text-cont-i-2 pb-5'>
                <h2 className='text-cont-i-2-2'>Easy to give. Easy to love.</h2>
                <h2>Never expires.</h2>
                <GiftPageCards />
            </div>

            <div className='north-light-cont mt-5'>
                <img className='north-light-img' src={logo5} alt=''></img>
                <h1 className='great-place-to-stay'>A key to the world <br /> of Airbnb</h1>
            </div>

            <div className="corporate-cont container px-5">
                <div className="pb-5">
                    <h3 style={{ color: "black", fontWeight: "bolder", fontSize: "52px" }}>Corporate <br /> gift cards</h3>
                </div>
                <div>
                    <h3 style={{ color: "black" }}>Give your customers and employees <br /> the gift of travel.</h3>
                    <h6 style={{ textDecoration: "underline" }}>Learn more</h6>
                </div>
            </div>
            <div className="container px-5">
                <hr />
            </div>

            <div className="corporate-cont1 container px-5">
                <div className='pr-5 pb-5'>
                    <h3 style={{ color: "black", fontWeight: "bolder", fontSize: "52px" }}>Frequently <br /> asked questions </h3>
                    <h5>For other questions visit our <span style={{ textDecoration: "underline", fontWeight: "bolder" }} >help center</span></h5>
                </div>
                <div>
                    <div >
                        <div className='arrow-text-cont'>
                            <p className='arrow-text'>Are gift cards physical or digital?</p>
                            <i style={{ color: "black" }} class="bi bi-caret-down"></i>
                        </div>
                        <hr />
                    </div>
                    <div >
                        <div className='arrow-text-cont'>
                            <p className='arrow-text'>Where can I buy a physical gift card?</p>
                            <i style={{ color: "black" }} class="bi bi-caret-down"></i>
                        </div>
                        <hr />
                    </div>
                    <div >
                        <div className='arrow-text-cont'>
                            <p className='arrow-text'>What can gift cards be used for?</p>
                            <i style={{ color: "black" }} class="bi bi-caret-down"></i>
                        </div>
                        <hr />
                    </div>
                    <div >
                        <div className='arrow-text-cont'>
                            <p className='arrow-text'>Do gift cards expire?</p>
                            <i style={{ color: "black" }} class="bi bi-caret-down"></i>
                        </div>
                        <hr />
                    </div>
                    <div >
                        <div className='arrow-text-cont'>
                            <p className='arrow-text'>Where are gift cards available?</p>
                            <i style={{ color: "black" }} class="bi bi-caret-down"></i>
                        </div>
                        <hr />
                    </div>
                    <div >
                        <div className='arrow-text-cont'>
                            <p className='arrow-text'>How can I check my gift card balance?</p>
                            <i style={{ color: "black" }} class="bi bi-caret-down"></i>
                        </div>
                        <hr />
                    </div>
                    <div >
                        <div className='arrow-text-cont'>
                            <p className='arrow-text'>Which payment methods does Airbnb accept?</p>
                            <i style={{ color: "black" }} class="bi bi-caret-down"></i>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <MyFooter />
            </div>
        </>
    )
}

export default GiftPage

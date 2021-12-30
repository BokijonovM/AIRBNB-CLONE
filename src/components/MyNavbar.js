import React from 'react'
import { Button, Form } from 'react-bootstrap'
import logo from './images/logo.svg'
import navbarLogo from './images/navbar.png'
import './style.css';

function MyNavbar() {
    return (
        <>
            <div className="z-index">
                <div className="nav-container">
                    <div> <img src={logo} alt='' /></div>
                    <div className="text-container">
                        <p>Places to stay</p>
                        <p>Experiences</p>
                        <p>Online Experiences</p>
                    </div>
                    {/* SEARCH  BAR FOR NAVBAR */}
                    {/* <div className="button-container">
                    <Button className="buttons-nav2" variant="light"> <p className='m-0 p-0 button-4 d-flex'><span className='pr-5 pt-1'> Start your search</span><i class="bi bi-search ml-5" style={{ fontSize: 18, color: "black" }}></i> </p>  </Button>{' '}
                </div> */}

                    <div className="buttons-container">
                        <Button className="buttons-nav" variant="transparent">Become a Host</Button>{' '}
                        <Button className="buttons-nav py-2" variant="transparent"><img className='world-png' src='https://th.bing.com/th/id/R.6157c239f55eeb078c87779e5c7d087e?rik=y%2fBBj%2fsWb98TmA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fa%2fj%2fP%2fe%2f7%2fu%2fwhite-globe-hi.png&ehk=sbWQDeUP%2fS9Mmxy00ZYRw3TfHJXZ6jvRCrVBR%2bSuhbw%3d&risl=&pid=ImgRaw&r=0' alt='' /></Button>{' '}
                        <Button className="buttons-nav1 ml-2 m-0 py-0 px-n5" variant="light"> <p className='m-0 p-0 button-3'><i class="bi bi-list mr-2" style={{ fontSize: 21, color: "black" }}></i> <i class="bi bi-person-circle" style={{ fontSize: 23, color: "black" }}></i></p>  </Button>{' '}
                    </div>
                </div>
            </div>

            <div className="logo-cont">
                <img className='navbar-logo-2' src={navbarLogo} alt=''></img>
            </div>
            <div className='main-form-cont'>
                <div className='d-flex justify-content-between form-main-div'>
                    <div className='nav2-item py-2 pr-5 pl-4'>
                        <div>
                            <h6 className='p-0 m-0' style={{ fontSize: "12px" }}>Location</h6>
                            <p className='m-0 text-muted' style={{ fontSize: "14px" }}>Where are you going?</p></div>

                    </div>
                    <div className='nav2-item py-2 pr-5 pl-4'>
                        <div>
                            <h6 className='p-0 m-0' style={{ fontSize: "12px" }}>Check in</h6>
                            <p className='m-0 text-muted' style={{ fontSize: "14px" }}>Add dates</p>
                        </div>

                    </div>
                    <div className='nav2-item py-2 pr-5 pl-4'>
                        <div>
                            <h6 className='p-0 m-0' style={{ fontSize: "12px" }}>Check out</h6>
                            <p className='m-0 text-muted' style={{ fontSize: "14px" }}>Add dates</p>
                        </div>
                    </div>
                    <div className='nav2-item nav2-item-search py-2 pr-5 pl-4'>
                        <div>
                            <h6 className='p-0 m-0' style={{ fontSize: "12px" }}>Guests</h6>
                            <p className='m-0 text-muted' style={{ fontSize: "14px" }}>Add guests</p>
                        </div>

                        <i className="bi bi-search bi-search-nav"></i>
                    </div>
                    {/* <div className='nav2-item nav2-item-search py-2 pr-5 pl-3'>
                    <i className="bi bi-search bi-search-nav"></i>
                </div> */}
                </div>
            </div>

        </>
    )
}

export default MyNavbar


    // < Navbar className = "p-0 navbar" >
    //             <Navbar.Brand href="#home"><img className='airbnb-logo' src={logo} /></Navbar.Brand>
    //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //             <Navbar.Collapse id="basic-navbar-nav nav-items">
    //                 <Nav className="mr-auto">
    //                     <Nav.Link href="#home">Places to stay</Nav.Link>
    //                     <Nav.Link href="#link">Experiences</Nav.Link>
    //                     <Nav.Link href="#link">Online Experiences</Nav.Link>
    //                 </Nav>
    //             </Navbar.Collapse>
    //         </ >
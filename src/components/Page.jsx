import React from 'react'
import './style/page.css'
import { Button, Navbar } from 'react-bootstrap'
import logo from './images/airbnb.svg'
function Page() {
    return (
        <div>
            <Navbar className='navbar-page' expand="lg" variant="light">
                <Navbar.Brand className='p-0'> <img className='logo-page p-2' src={logo} alt=''></img></Navbar.Brand>
                <div className='mage2-buttons-cont'>
                    <Button className='ask-btn border-0 px-4 py-2 shadow-lg bg-body mr-3'><img className='nav-img' src='https://th.bing.com/th/id/OIP.d6XGiYqjvNjdLc_6Vl_KdgHaHa?pid=ImgDet&rs=1' alt='' /> Ask a Superhost</Button>{' '}
                    <Button className='page-btn border-0 px-4 py-3 nav-btn'>Become a host</Button>{' '}
                </div>

            </Navbar >
            <div className="page-cont container pl-5 main-page-cont">
                <div className=''>
                    <h3 style={{ color: "rgb(96, 1, 43)" }}>Questions about hosting?</h3>
                    <h1 style={{ color: "rgb(96, 1, 43)" }} className='py-5'>Just ask &nbsp;
                        <span className='span-name span-name-spans'>
                            <span> P</span>
                            <span>e</span>
                            <span>t</span>
                            <span>e</span>
                            <span>r </span>
                        </span >, a Superhost < br /> in Scarsdale.They’ll be your < br /> guide to all things hosting.</h1 >

                    <Button className='page-btn border-0 px-5 py-3'>Ask a Superhost</Button>
                </div >

            </div >

        </div >
    )
}

export default Page

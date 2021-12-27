import React from 'react'
import logo from './images/logo1.svg'
import { Button, Navbar } from 'react-bootstrap'
import MyFooter from './MyFooter'
import MyInspiration from './MyInspiration'
import CardsP2 from './CardsP2'
import CardsP3 from './CardsP3'
import CardsP3P2 from './CardsP3P2'
import CardsP3P3 from './CardsP3P3'

function Page2() {
    return (
        <div className='page2-container'>
            <div>
                <Navbar expand="lg" variant="light" bg="light" className="my-nav-p2 d-flex justify-content-between shadow bg-body">
                    <Navbar.Brand className='p-0 pl-5' href="#"><a href='/'><img src={logo} alt=''></img></a></Navbar.Brand>
                    <div className="buttons-container pr-5">
                        <Button style={{ color: "black" }} className="buttons-nav3" variant="transparent">Become a Host</Button>{' '}
                        <Button className="buttons-nav4 py-2" variant="transparent"><i style={{ color: "black", fontSize: '20px' }} className="bi bi-globe p-0"></i></Button>{' '}
                        <Button style={{ backgroundColor: "grey" }} className="buttons-nav1 ml-2 m-0 py-0 px-n5" variant="light"> <p className='m-0 p-0 button-3'><i className="bi bi-list mr-2" style={{ fontSize: 21, color: "black" }}></i> <i className="bi bi-person-circle" style={{ fontSize: 23, color: "black" }}></i></p>  </Button>{' '}
                    </div>
                </Navbar>
            </div>
            <div className='pt-5'>
                <CardsP2 />
                <CardsP3 />
                <CardsP3P3 />
                <CardsP3P2 />
                <MyInspiration />

            </div>
            <div className='load-more-btn my-5'>
                <Button className="py-3 px-5 border-0 load-more-button" >Load more</Button>
            </div>
            <div>
                <MyFooter />
            </div>



        </div>
    )
}

export default Page2

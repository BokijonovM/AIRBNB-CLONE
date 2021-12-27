import React from 'react'
import logo from './images/logo1.svg'
import { Button, Navbar } from 'react-bootstrap'
import MyFooter from './MyFooter'
import MyInspiration from './MyInspiration'
import CardsP2 from './CardsP2'

function Page2() {
    return (
        <div>
            <div>
                <Navbar expand="lg" variant="light" bg="light" className="my-nav-p2 d-flex justify-content-between">
                    <Navbar.Brand className='p-0 pl-5' href="#"><a href='/'><img src={logo} alt=''></img></a></Navbar.Brand>
                    <div className="buttons-container pr-5">
                        <Button style={{ color: "black" }} className="buttons-nav3" variant="transparent">Become a Host</Button>{' '}
                        <Button className="buttons-nav4 py-2" variant="transparent"><i style={{ color: "black", fontSize: '20px' }} class="bi bi-globe p-0"></i></Button>{' '}
                        <Button style={{ backgroundColor: "grey" }} className="buttons-nav1 ml-2 m-0 py-0 px-n5" variant="light"> <p className='m-0 p-0 button-3'><i class="bi bi-list mr-2" style={{ fontSize: 21, color: "black" }}></i> <i class="bi bi-person-circle" style={{ fontSize: 23, color: "black" }}></i></p>  </Button>{' '}
                    </div>
                </Navbar>
            </div>
            <div className='pt-5'>
                <CardsP2 />
                <MyInspiration />

            </div>
            <div>
                <MyFooter />
            </div>



        </div>
    )
}

export default Page2

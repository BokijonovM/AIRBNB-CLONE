import React from 'react'
import './myDiscover.css'
import { Button, Row, Col } from 'react-bootstrap'

function MyDiscover() {
    return (
        <>
            <h3 className='container mb-4 pl-4 ml-2 mt-4'>Discover Airbnb Experiences</h3>
            <Row xs={1} md={2} className="g-2">

                <div className="discovery-cont container">
                    <Col>
                        <div className="img-1">
                            <img className="img" src='https://images.unsplash.com/photo-1548625149-720134d51a3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80' alt='' />


                            <h1 className="text-btn">Things to do <br /> on your trip</h1>

                            <Button className="btn-text px-4 py-2" variant="light">Experiences</Button>
                            {/* <button className="btn-text">Ehh</button> */}

                        </div>
                    </Col>
                    <Col>
                        <div className="img-2">
                            <img className="img1" src='https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80' alt='' />

                            <h1 className="text-btn1">Things to do <br /> from home </h1>

                            <Button className="btn-text1 px-4 py-2" variant="light">Online Experiences</Button>
                        </div>
                    </Col>
                </div>

            </Row>
        </>
    )
}

export default MyDiscover

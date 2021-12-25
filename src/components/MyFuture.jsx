import React from 'react'
import './style/future.css'
import { Row, Col } from 'react-bootstrap'

function MyFuture() {
    return (
        <>
            <h3 className='container mb-4 px-5' style={{ color: "black" }}>Inspiration for future getaways</h3>

            <div className='d-flex justify-content-center mb-1'>
                <Row className='container row-cont-f '>
                    <Col className='container col-cont-f'>
                        <p className='active col-f-1' style={{ color: 'black' }}>Destinations for arts</p>

                    </Col>
                    <Col className='container col-cont-f'>
                        <p className='active'>Destinations for EU</p>

                    </Col>
                    <Col className='container col-cont-f'>
                        <p className='active'>Mountain cabins</p>
                    </Col>
                    <Col className='container col-cont-f'>
                        <p className='active'>Beach destinations</p>
                    </Col>
                    <Col className='container col-cont-f'>
                        <p className='active'>Popular destinations</p>
                    </Col>
                    <Col className='container col-cont-f'>
                        <p className='active'>Unique Stays</p>
                    </Col>
                </Row>

            </div>
            <div className="container">
                <div className="container hr-cont-f">
                    <hr className="m-0 mx-3"></hr>
                </div>
            </div>

        </>
    )
}

export default MyFuture


    // < h6 className = "mr-0 py-2 px-1 pt-0 h6-1" style = {{ color: 'black' }}> Destinations for arts & culture</ >
    //                 <h6 className="mr-0 py-2 px-1 pt-0">Destinations for outdoor adventure</h6>
    //                 <h6 className="mr-0 py-2 px-1 pt-0">Mountain cabins</h6>
    //                 <h6 className="mr-0 py-2 px-1 pt-0">Beach destinations</h6>
    //                 <h6 className="mr-0 py-2 px-1 pt-0">Popular destinations</h6>
    //                 <h6 className="mr-0 py-2 px-1 pt-0">Unique Stays</h6>
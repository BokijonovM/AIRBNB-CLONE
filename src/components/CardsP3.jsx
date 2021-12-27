import React from 'react'
import { Row, Card, Col, Badge } from 'react-bootstrap'
import logo from './images/heart.svg'

function CardsP3() {
    return (
        <>
            <h4 className='container mt-3 px-5' style={{ color: "black" }}>Plan a trip with help from local Hosts around the world
                <hr /></h4>
            <div className='container'>
                <Row xs={1} md={3} lg={5} className="g-4 container row__poster">
                    {Array.from({ length: 15 }).map((_, idx) => (
                        <Col className='p-2'>
                            <Card className='bg-transparent border-0 p3-card'>
                                <Card.Img className='page3-img' variant="top" src="https://images.unsplash.com/photo-1515615791787-d8e0022e233f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" />
                                {/* <Badge className='img-badge' bg="transparent"><i style={{ color: "red", opacity: "0.5", fontSize: "30px" }} class="bi bi-heart-fill"></i></Badge> */}
                                <Badge className='img-badge' bg="transparent"><img className='badge-image' src={logo} alt='' /></Badge>
                                <Card.Body className='p-0'>
                                    <Card.Text style={{ color: "black" }}>
                                        <p className='d-flex mb-0' style={{ color: "black" }}><i style={{ color: "red" }} className="bi bi-star-fill pr-1"></i>5.0<p className='px-1 text-muted mb-1' style={{ color: "black" }}>(99) · World</p></p>
                                        <p className='anyone-text mb-0'>Design your trip to the World with me</p>
                                        <p className='trip-cost'><span className='trip-cost-span'>From Price:$999</span>  / person</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>






                {/* From Price:$43 / person */}

            </div>
        </>
    )
}

export default CardsP3

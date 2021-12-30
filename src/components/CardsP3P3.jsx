import React from 'react'
import { Row, Card, Col, Badge, Button } from 'react-bootstrap'
import logo from './images/heart1.svg'

function CardsP3P3() {
    return (
        <>
            <h4 className='container mt-3 px-5' style={{ color: "black" }}>Starting in the next 6 hours<hr /></h4>

            <div className='container'>
                <Row xs={1} md={1} lg={2} className="g-4 container row__poster">
                    {Array.from({ length: 10 }).map((_, idx) => (
                        <Col className='d-flex p-2'>
                            <Card className='d-flex p3p3-card bg-transparent'>
                                <div>
                                    <Card.Img className='p3p3-img' variant="top" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80" />
                                </div>

                                <Badge className='img-badge' bg="transparent"><img className='badge-image' src={logo} alt='' /></Badge>
                                <div>
                                    <Card.Body className='bg-transparent'>
                                        <Card.Text style={{ color: "black" }}>
                                            <p className='d-flex mb-0' style={{ color: "black" }}><i style={{ color: "red" }} className="bi bi-star-fill pr-1"></i>5.0<p className='px-1 text-muted mb-1' style={{ color: "black" }}>(239739) · Uzbekistan</p></p>
                                            <p className='anyone-text mb-0'>Welcome to Uzbekistan <br /> Eat and Enjoy</p>
                                            <p className='trip-cost'><span className='trip-cost-span'>Price:<span className='text-muted px-1'> ̶$̶9̶9̶  </span>$79</span>  / person</p>
                                            <div className='buttons-cont-p3'>
                                                <Button className='mr-1 py-1 px-2 p3p3-button' variant="outline-secondary">2:00 PM</Button>
                                                <Button className='py-1 px-2 p3p3-button' variant="outline-secondary">5:00 PM</Button>
                                            </div>

                                        </Card.Text>
                                    </Card.Body></div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default CardsP3P3

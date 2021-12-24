import React from 'react'
import { Row, Card, Col } from 'react-bootstrap'
import './style/myinspiration.css'
function MyInspiration() {
    return (
        <>
            <h3 className='container my-4 pl-5' style={{ color: "black" }}>Inspiration for your next trip</h3>

            <div className="cards-cont container">

                <Row xs={1} md={2} lg={4} className="g-4 container">

                    <Col>
                        <Card className="mb-4 card card border-0 mx-1">
                            <Card.Img variant="top" className="card-img" src="https://images.unsplash.com/photo-1601963251218-816ff32e2baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2099&q=80" />
                            <Card.Body>
                                <Card.Title>Uzbekistan Bukhara</Card.Title>
                                <Card.Text>
                                    222 kilometers away
                                    <br /> <br /> <br /><br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-4 card card border-0 mx-1">
                            <Card.Img variant="top" className="card-img" src="https://images.unsplash.com/photo-1576926191927-1237cbd83fce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                            <Card.Body>
                                <Card.Title>Poland Gdansk</Card.Title>
                                <Card.Text>
                                    6550 kilometers away
                                    <br /> <br /> <br /><br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-4 card card border-0 mx-1">
                            <Card.Img variant="top" className="card-img" src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80" />
                            <Card.Body>
                                <Card.Title>Turkey Istanbul</Card.Title>
                                <Card.Text>
                                    3750 kilometers away
                                    <br /> <br /> <br /><br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-4 card card border-0 mx-1">
                            <Card.Img variant="top" className="card-img" src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80" />
                            <Card.Body>
                                <Card.Title>Italy Venezia </Card.Title>
                                <Card.Text>
                                    8900 kilometers away
                                    <br /> <br /> <br /><br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </div>
        </>
    )
}

export default MyInspiration

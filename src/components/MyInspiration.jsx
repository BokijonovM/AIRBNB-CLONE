import React from 'react'
import { Row, Card, Col } from 'react-bootstrap'
import './myinspiration.css'
function MyInspiration() {
    return (
        <>
            <h3 className='container mb-4 pl-5'>Inspiration for your next trip</h3>

            <div className="cards-cont container">

                <Row xs={1} md={2} lg={4} className="g-4 container">

                    <Col>
                        <Card className="mb-4 card bg-dark border-0 mx-1">
                            <Card.Img variant="top" className="card-img" src="https://images.unsplash.com/photo-1601963251218-816ff32e2baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2099&q=80" />
                            <Card.Body>
                                <Card.Title>Uzbekistan</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-4 card bg-dark border-0 mx-1">
                            <Card.Img variant="top" className="card-img" src="https://images.unsplash.com/photo-1576926191927-1237cbd83fce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                            <Card.Body>
                                <Card.Title>Poland</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-4 card bg-dark border-0 mx-1">
                            <Card.Img variant="top" className="card-img" src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80" />
                            <Card.Body>
                                <Card.Title>Turkey</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-4 card bg-dark border-0 mx-1">
                            <Card.Img variant="top" className="card-img" src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80" />
                            <Card.Body>
                                <Card.Title>Italy</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
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

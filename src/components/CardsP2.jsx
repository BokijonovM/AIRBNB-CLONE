import React from 'react'
import { Row, Card, Col, Button } from 'react-bootstrap'

function CardsP2() {
    return (
        <>
            <h4 className='container mt-5 px-5' style={{ color: "black" }}>New this week<hr /></h4>
            <div className=' card-cont-p2 container'>

                <Row className="g-4 row__poster">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col className='p2-col p-2'>
                            <Card className='border-0 p2-card'>
                                <Card.Img className='p2-card-img d-block' variant="top" src="https://images.unsplash.com/photo-1617334140746-03dc1cc27593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt='' />
                                <Card.Body className='p2-card-body'>
                                    <div>
                                        <Card.Title className='p2-card-title mb-0'>Collection</Card.Title>
                                        <Card.Text >
                                            <h2 className='card-text-p2'>Plan a trip with tips <br></br> from a local</h2>

                                        </Card.Text>
                                    </div>

                                    <Button className='p2-btn-card' variant="light">Show all</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        </>
    )
}

export default CardsP2

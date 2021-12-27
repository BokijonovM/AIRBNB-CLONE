import React from 'react'
import { Row, Card, Col, Button } from 'react-bootstrap'

function CardsP2() {
    return (
        <div className='pt-5'>
            <Row xs={4} md={4} lg={4} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card className='border-0 p2-card'>
                            <Card.Img className='p2-card-img' variant="top" src="https://images.unsplash.com/photo-1617334140746-03dc1cc27593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt='' />
                            <Card.Body className='p2-card-body'>
                                <Card.Title className='p2-card-title'>Collection</Card.Title>
                                <Card.Text>
                                    Plan a trip with tips <br></br> from a local
                                </Card.Text>
                                <Button variant="light">Show all</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default CardsP2

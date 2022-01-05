import React from 'react'
import { Row, Card, Col, Button } from 'react-bootstrap'
import mainLogo from './assets/1.jpg'

function CardsP2() {
    return (
        <>
            <h4 className='container mt-5 px-5' style={{ color: "black" }}>New this week<hr /></h4>
            <div className='container'>

                {/* <Row xs={1} md={1} lg={2} className="g-4 container row__poster">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col className='p-2'>
                            <Card className='border-0 p2-card'>
                                <Card.Img className='p2-card-img' variant="top" src="https://images.unsplash.com/photo-1617334140746-03dc1cc27593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt='' />
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
                </Row> */}
                <Row xs={1} md={1} lg={2} className="g-4 container row__poster">
                    {Array.from({ length: 15 }).map((_, idx) => (
                        <Col className='p-2'>
                            <Card className='bg-transparent border-0 p3-card'>
                                <Card.Img className='page2-img' variant="top" src={mainLogo} alt='' />
                                {/* <Badge className='img-badge' bg="transparent"><i style={{ color: "red", opacity: "0.5", fontSize: "30px" }} class="bi bi-heart-fill"></i></Badge> */}

                                <Card.Body className='p-0 p2-card-body'>
                                    <Card.Text style={{ color: "black" }}>
                                        <div>
                                            <p style={{ color: "white", fontWeight: "bolder" }}>Collection</p>
                                            <h2 className='card-text-p2'>Plan a trip with tips <br></br> from a local</h2>
                                        </div>

                                        <Button className='p2-btn-card px-4' variant="light">Show all</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>


            </div>
            <div className=' card-cont-p2  ml-3 mr-3'>
                <Row className=' container row__poster mt-3 mb-4 ml-4 mr-4'>
                    <Button className='mr-2 secondary-btn' variant="outline-secondary">Dates</Button>
                    <Button className='mr-2 secondary-btn' variant="outline-secondary">GroupSizes</Button>
                    <Button className='mr-2 secondary-btn' variant="outline-secondary">MoreFilters</Button>
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <Col className='p2-col mr-2 p-0 '>
                            <Button className='px-5 more-bts border-0'>GreatForGroups </Button>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default CardsP2

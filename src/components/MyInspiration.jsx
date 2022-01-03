import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
// import { CardColumns } from 'reactstrap';
import './style/myinspiration.css'
function MyInspiration() {
    return (
        <>
            <h3 className='container my-4 px-5' style={{ color: "black" }}>Inspiration for your next trip <hr /></h3>

            <div className="cards-cont container">

                <Row xs={1} md={2} lg={4} className="g-4 container">

                    <Col>
                        <Card className="mb-4 card card border-0 mx-1">
                            <Card.Img variant="top" className="card-img" src="https://images.unsplash.com/photo-1601963251218-816ff32e2baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2099&q=80" />
                            <Card.Body>
                                <Card.Title style={{ color: 'white' }}>Uzbekistan Bukhara</Card.Title>
                                <Card.Text style={{ color: 'white' }}>
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
                                <Card.Text style={{ color: 'white' }}>
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
                                <Card.Text style={{ color: 'white' }}>
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
                                <Card.Text style={{ color: 'white' }}>
                                    8900 kilometers away
                                    <br /> <br /> <br /><br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </div>
            {/* <CardColumns>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card bg="primary" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img src="holder.js/100px160" />
                </Card>
                <Card className="text-right">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns> */}
        </>
    )
}

export default MyInspiration

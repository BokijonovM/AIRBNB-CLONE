import React from 'react'
import './style/myDiscover.css'
import { Row, Col, Card, Button } from 'react-bootstrap'
import logo12 from './assets/12.jpg'
import logo13 from './assets/13.jpg'


function MyDiscover() {
    return (
        <>
            <h3 className='container mb-4 px-5' style={{ color: "black" }}>Discover Airbnb Experiences <hr /></h3>

            <div className="cards-d-cont container">
                <Row xs={1} md={1} lg={2} className="g-4 container">
                    <Col>
                        <Card className="mb-4 card-d border-0 mx-1">
                            <Card.Img variant="top" className="card-img-d" src={logo12} />
                            <Card.Body className='card-d-body pt-5 ml-4'>
                                <Card.Title className='card-d-title'>Things to do <br />
                                    on your trip</Card.Title>
                                <Button className="btn-text1 px-4 py-2" variant="light">Experiences</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-4 card-d border-0 mx-1">
                            <Card.Img variant="top" className="card-img-d" src={logo13} />
                            <Card.Body className='card-d-body pt-5 ml-4'>
                                <Card.Title className='card-d-title'>Things to do <br />
                                    from home</Card.Title>
                                <a href='/s/experiences/online'><Button className="btn-text1 px-4 py-2" variant="light">Online Experiences</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default MyDiscover




    // <>
    //         <h3 className='container mb-4 pl-4 ml-2 mt-4' style={{ color: "black" }}>Discover Airbnb Experiences</h3>
    //         <Row xs={1} md={1} lg={2} className="g-2">

    //             <div className="discovery-cont container">
    //                 <Col>
    //                     <Card className='border-0'>
    //                         <div className="img-1">
    //                             <img className="img" src='https://images.unsplash.com/photo-1548625149-720134d51a3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80' alt='' />


    //                             <h1 className="text-btn">Things to do <br /> on your trip</h1>

    //                             <Button className="btn-text px-4 py-2" variant="light">Experiences</Button>
    //                             {/* <button className="btn-text">Ehh</button> */}

    //                         </div>
    //                     </Card>
    //                 </Col>
    //                 <Col>
    //                     <Card className='border-0'>
    //                         <div className="img-2">
    //                             <img className="img1" src='https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80' alt='' />

    //                             <h1 className="text-btn1"> Things to do<br />from home</h1>

    //                             <Button className="btn-text1 px-4 py-2" variant="light">Online Experiences</Button>
    //                         </div>
    //                     </Card>
    //                 </Col>
    //             </div>

    //         </Row>
    //     </>
import React from 'react'
import './style/footer.css'
import { Row, Col, Button } from 'react-bootstrap'

function MyFooter() {
    return (
        <>
            <div className="footer-cont d-flex justify-content-center">
                <Row className="container row-cont">
                    <Col>
                        <h6 className='pb-2'>Support</h6>
                        <p className="mb-2 support-text"><a href="#">Help Center</a></p>
                        <p className="mb-2 support-text"><a href="#">Safety information</a></p>
                        <p className="mb-2 support-text"><a href="#">Cancellation options</a></p>
                        <p className="mb-2 support-text"><a href="#">Our COVID-19 Response</a> </p>
                        <p className="mb-2 support-text"><a href="#">Supporting people with disabilities</a></p>
                        <p className="mb-2 support-text"><a href="#">Report a neighborhood concern</a></p>
                    </Col>
                    <Col>
                        <h6 className='pb-2'>Community</h6>
                        <p className="mb-2 support-text"><a href="#">Airbnb.org: disaster relief housing</a></p>
                        <p className="mb-2 support-text"><a href="#">Support Afghan refugees</a></p>
                        <p className="mb-2 support-text"><a href="#">Celebrating diversity & belonging</a></p>
                        <p className="mb-2 support-text"><a href="#">Combating discrimination</a> </p>
                    </Col>
                    <Col>
                        <h6 className='pb-2'>Hosting</h6>
                        <p className="mb-2 support-text"><a href="#">Try hosting</a></p>
                        <p className="mb-2 support-text"><a href="#">AirCover: protection for Hosts</a></p>
                        <p className="mb-2 support-text"><a href="#"> Explore hosting resources</a></p>
                        <p className="mb-2 support-text"><a href="#">Visit our community forum</a> </p>
                        <p className="mb-2 support-text"><a href="#"> How to host responsibly</a></p>
                    </Col>
                    <Col>
                        <h6 className='pb-2'>About</h6>
                        <p className="mb-2 support-text"><a href="#">Newsroom</a></p>
                        <p className="mb-2 support-text"><a href="#">Learn about new features</a></p>
                        <p className="mb-2 support-text"><a href="#">Letter from our founders</a></p>
                        <p className="mb-2 support-text"><a href="#">Careers</a> </p>
                        <p className="mb-2 support-text"><a href="#">Investors</a></p>
                        <p className="mb-2 support-text"><a href="#"> Airbnb Luxe</a></p>
                    </Col>

                    <hr />
                </Row>
            </div>
            <div className="container hr-cont">
                <hr className="m-0"></hr>
            </div>
            <div className=' footer-cont1 '>
                <Row className='container d-flex justify-content-between' style={{ paddingLeft: "97px" }}>
                    <p className="support-text"><a href="#"> © 2021 Airbnb, Inc. · Privacy · Terms · Sitemap</a></p>
                    <div className='smt-cont d-flex'>
                        <div className='d-flex'>
                            <p style={{ color: "black" }}><i style={{ color: "black" }} class="bi bi-globe"></i><bold className="pl-2 pr-3" style={{ color: "black" }}>English (US)</bold>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ <bold style={{ color: "black" }}>USD</bold></p>
                        </div>
                        <div className='d-flex pl-5'>
                            <p className="px-2" style={{ color: "black" }}><i style={{ color: "black", }} class="bi bi-facebook"></i></p>
                            <p className="px-2" style={{ color: "black" }}><i style={{ color: "black", }} class="bi bi-twitter"></i></p>
                            <p className="px-2" style={{ color: "black" }}><i style={{ color: "black", }} class="bi bi-instagram"></i></p>

                        </div>
                    </div>

                </Row>

            </div>
        </>
    )
}

export default MyFooter

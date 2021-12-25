import React from 'react'
import './style/fut.css'
import { Row, Col } from 'react-bootstrap'

function Future() {
    return (
        <div className='d-flex justify-content-center'>
            <Row className='container row-cont-e '>
                <Col className='container col-cont-e'>
                    <p className='active pt-3'>Phoenix</p>
                    <p className='muted' style={{ color: "grey" }}>Arizona</p>
                    <p className='active pt-3'>San Francisco</p>
                    <p className='muted' style={{ color: "grey" }}>California</p>
                    <p className='active pt-3'>Keswick</p>
                    <p className='muted' style={{ color: "grey" }}>England</p>
                </Col>
                <Col className='container col-cont-e'>
                    <p className='active pt-3'>Phoenix</p>
                    <p className='muted' style={{ color: "grey" }}>Arizona</p>
                    <p className='active pt-3'>San Francisco</p>
                    <p className='muted' style={{ color: "grey" }}>California</p>
                    <p className='active pt-3'>Keswick</p>
                    <p className='muted' style={{ color: "grey" }}>England</p>
                </Col>
                <Col className='container col-cont-e'>
                    <p className='active pt-3'>Phoenix</p>
                    <p className='muted' style={{ color: "grey" }}>Arizona</p>
                    <p className='active pt-3'>San Francisco</p>
                    <p className='muted' style={{ color: "grey" }}>California</p>
                    <p className='active pt-3'>Keswick</p>
                    <p className='muted' style={{ color: "grey" }}>England</p>
                </Col>
                <Col className='container col-cont-e'>
                    <p className='active pt-3'>Phoenix</p>
                    <p className='muted' style={{ color: "grey" }}>Arizona</p>
                    <p className='active pt-3'>San Francisco</p>
                    <p className='muted' style={{ color: "grey" }}>California</p>
                    <h6 style={{ textDecoration: "underline" }}>Show more</h6>
                </Col>
            </Row>

        </div>
    )
}

export default Future

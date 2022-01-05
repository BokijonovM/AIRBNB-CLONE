import React from 'react'
import './style/fut.css'
import { Row, Col } from 'react-bootstrap'

function Future() {
    return (
        <div className='d-flex justify-content-center'>
            <Row className='container row-cont-e'>
                <Col className='container col-cont-e'>
                    <p className='active pt-3'>Phoenix</p>
                    <p className='muted' style={{ color: "rgb(177, 177, 177)" }}>Arizona</p>
                    <p className='active pt-3'>Warsaw</p>
                    <p className='muted' style={{ color: "rgb(177, 177, 177)" }}>California</p>
                    <p className='active pt-3'>Keswick</p>
                    <p className='muted' style={{ color: "rgb(177, 177, 177)" }}>England</p>
                </Col>
                <Col className='container col-cont-e'>
                    <p className='active pt-3'>Phoenix</p>
                    <p className='muted' style={{ color: "rgb(177, 177, 177)" }}>Arizona</p>
                    <p className='active pt-3'>Warsaw</p>
                    <p className='muted' style={{ color: "rgb(177, 177, 177)" }}>California</p>
                    <p className='active pt-3'>Keswick</p>
                    <p className='muted' style={{ color: "rgb(177, 177, 177)" }}>England</p>
                </Col>
                <Col className='container col-cont-e'>
                    <p className='active pt-3'>Phoenix</p>
                    <p className='muted' style={{ color: "rgb(177, 177, 177)" }}>Arizona</p>
                    <p className='active pt-3'>Warsaw</p>
                    <p className='muted' style={{ color: "rgb(177, 177, 177)" }}>California</p>
                    <p className='active pt-3'>Keswick</p>
                    <p className='muted' style={{ color: "rgb(177, 177, 177)" }}>England</p>
                </Col>
                <Col className='container col-cont-e'>
                    <p className='active pt-3'>Phoenix</p>
                    <p className='muted' style={{ color: "rgb(177, 177, 177)" }}>Arizona</p>
                    <p className='active pt-3'>Warsaw</p>
                    <p className='muted' style={{ color: "rgb(177, 177, 177)" }}>California</p>
                    <h6 style={{ textDecoration: "underline" }}>Show more</h6>
                </Col>
            </Row>
        </div>
    )
}

export default Future

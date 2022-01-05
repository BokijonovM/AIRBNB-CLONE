import React, { createContext } from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import logo from './images/airbnb1.svg'
import { Component } from "react";



class GiftPageCards extends Component {
    state = {};
    cities = [
        {
            src: "https://images.unsplash.com/photo-1576643389950-64434aa6c7db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1604009261133-30a8abf80cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1621659518246-54c47e85d496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1611242320536-f12d3541249b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        }

    ];
    render() {
        return (
            <>
                <Container fluid className="container__deco">
                    <div className='container px-5'>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {this.cities.map((city, i) => {
                                return (
                                    <Col className='p-0'>
                                        <Card className='m-3 border-0 gift-i-card'>
                                            <Card.Img className='giftCard-img-i' variant="top" src={city.src} />
                                            <Card.Body className='gift-i-card-body'>
                                                <img className='gift-i-card-img2' src={logo} alt=''></img>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Container>
            </>
        );
    }
}
export default GiftPageCards;

// function GiftPageCards() {
//     return (
//         <div className='container px-5'>
//             <Row xs={1} md={2} lg={3} className="g-4">
//                 {Array.from({ length: 6 }).map((_, idx) => (
//                     <Col className='p-0'>
//                         <Card className='m-2 border-0 gift-i-card'>
//                             <Card.Img className='giftCard-img-i' variant="top" src="https://images.unsplash.com/photo-1621659518246-54c47e85d496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" />
//                             <Card.Body className='gift-i-card-body'>
//                                 <img className='gift-i-card-img' src={logo} alt=''></img>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     )
// }

// export default GiftPageCards

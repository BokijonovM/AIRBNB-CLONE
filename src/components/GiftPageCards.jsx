import { Row, Col, Card, Container } from 'react-bootstrap'
import logo from './images/airbnb1.svg'
import { Component } from "react";
import logo6 from './assets/6.jpg'
import logo7 from './assets/7.jpg'
import logo8 from './assets/8.jpg'
import logo9 from './assets/9.jpg'
import logo10 from './assets/10.jpg'
import logo11 from './assets/11.jpg'


class GiftPageCards extends Component {
    state = {};
    cities = [
        {
            src: { logo6 },
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
                            <Col className='p-0'>
                                <Card className='m-3 border-0 gift-i-card'>
                                    <Card.Img className='giftCard-img-i' variant="top" src={logo6} />
                                    <Card.Body className='gift-i-card-body'>
                                        <img className='gift-i-card-img2' src={logo} alt=''></img>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='p-0'>
                                <Card className='m-3 border-0 gift-i-card'>
                                    <Card.Img className='giftCard-img-i' variant="top" src={logo7} />
                                    <Card.Body className='gift-i-card-body'>
                                        <img className='gift-i-card-img2' src={logo} alt=''></img>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='p-0'>
                                <Card className='m-3 border-0 gift-i-card'>
                                    <Card.Img className='giftCard-img-i' variant="top" src={logo8} />
                                    <Card.Body className='gift-i-card-body'>
                                        <img className='gift-i-card-img2' src={logo} alt=''></img>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='p-0'>
                                <Card className='m-3 border-0 gift-i-card'>
                                    <Card.Img className='giftCard-img-i' variant="top" src={logo9} />
                                    <Card.Body className='gift-i-card-body'>
                                        <img className='gift-i-card-img2' src={logo} alt=''></img>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='p-0'>
                                <Card className='m-3 border-0 gift-i-card'>
                                    <Card.Img className='giftCard-img-i' variant="top" src={logo10} />
                                    <Card.Body className='gift-i-card-body'>
                                        <img className='gift-i-card-img2' src={logo} alt=''></img>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='p-0'>
                                <Card className='m-3 border-0 gift-i-card'>
                                    <Card.Img className='giftCard-img-i' variant="top" src={logo11} />
                                    <Card.Body className='gift-i-card-body'>
                                        <img className='gift-i-card-img2' src={logo} alt=''></img>
                                    </Card.Body>
                                </Card>
                            </Col>
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

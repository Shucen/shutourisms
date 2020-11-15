import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Zmage from 'react-zmage'

import invitecardIcon from './img/invitecardicon.png';
import TshirtIcon from './img/tshirticon.png';
import Postericon from './img/postericon.png';
import inviteFront from './img/invite-front.png';
import inviteBack from './img/invite-back.png';
import Product from './img/product.jpg';
import Tshirt1 from './img/tshirt1.png';
import Tshirt2 from './img/tshirt2.png';

import './store.css';

const Store = () => {
    return (
        <div>
            <Container>
                <Row className="store-top">
                    <h6>Product</h6><hr />
                </Row>
                <Row className="store-section">
                    <Col md="4" sm="12" className="store-list">
                        <Zmage src={ invitecardIcon } alt="invitecardIcon" className="icon-img" set={[{
                            src: inviteFront,
                            alt: "invitecardIcon",
                        },{
                            src: inviteBack,
                            alt: "invitecardIcon",
                        }]} />
                        <p className="text-left title-color">Item<span className="title-border">Invite Card</span></p>
                    </Col>
                    <Col md="4" sm="12" className="store-list">
                        <Zmage src={ Postericon } alt="posterIcon" className="icon-img" set={[{
                            src: Product,
                            alt: "Product",
                        }]} />
                        <p className="text-left title-color">Item<span className="title-border">Poster</span></p>
                    </Col>
                    <Col md="4" sm="12" className="store-list">
                        <Zmage src={ TshirtIcon } alt="TshirtIcon" className="icon-img" set={[{
                            src: Tshirt1,
                            alt: "T-shirt",
                        },
                        {
                            src: Tshirt2,
                            alt: "T-shirt",
                        }]} />
                        <p className="text-left title-color">Item<span className="title-border">T-Shirt</span></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export { Store };
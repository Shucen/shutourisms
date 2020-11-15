import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './sponsor.css';
import Sponsor1 from './img/sponsor1.jpg';
import Sponsor2 from './img/sponsor2.jpg';
import Sponsor3 from './img/sponsor3.png';
import Sponsor4 from './img/sponsor4.png';
import Sponsor5 from './img/sponsor5.jpg';
import Sponsor6 from './img/sponsor6.JPG';
import Sponsor7 from './img/sponsor7.png';
import Sponsor8 from './img/sponsor8.png';
const Sponsor = () => {
    return (
        <div>
        <Container className="sponsor-session">
            <Row className="sponsor-items">
                <Col md="6" sm="6" name="description">
                    <p className="sponsor-title">上好吉得堡</p>
                    <p className="sponsor-content">地址 | <br />
                    台北市文山區試院路80-2號</p>
                    <p className="sponsor-content">電話 | <br />
                    (02)2236-1225</p>
                </Col>
                <Col md="6" sm="6" className="sponsor-img">
                    <img src={ Sponsor1 } alt="Sponsor1" />
                </Col>
                <a href="https://reurl.cc/E7Qm5n" target="block">
                    <button className="sponsor-button">查看公司</button>
                </a>
            </Row>
            <Row className="sponsor-items">
                <Col md="6" sm="6" name="description">
                    <p className="sponsor-title">米樂早餐店</p>
                    <p className="sponsor-content">地址 | <br />
                    台北市文山區試院路58-2號</p>
                    <p className="sponsor-content">電話 | <br />
                    (02)2236-2387</p>
                </Col>
                <Col md="6" sm="6" className="sponsor-img">
                    <img src={ Sponsor2 } alt="Sponsor2" />
                </Col>
                <a href="https://www.facebook.com/millerbreakfast/" target="block">
                    <button className="sponsor-button">查看公司</button>
                </a>
            </Row>
            <Row className="sponsor-items">
                <Col md="6" sm="6" name="description">
                    <p className="sponsor-title">晁銓排骨</p>
                    <p className="sponsor-content">地址 | <br />
                    台北市文山區木柵路一段96號</p>
                    <p className="sponsor-content">電話 | <br />
                    (02)2236-2209</p>
                </Col>
                <Col md="6" sm="6" className="sponsor-img">
                    <img src={ Sponsor3 } alt="Sponsor3" />
                </Col>
                <a href="https://www.facebook.com/chaoquan.restaurant/" target="block">
                    <button className="sponsor-button">查看公司</button>
                </a>
            </Row>
            <Row className="sponsor-items">
                <Col md="6" sm="6" name="description">
                    <p className="sponsor-title">富粥城</p>
                    <p className="sponsor-content">地址 | <br />
                    台北市文山區木柵路一段10號</p>
                    <p className="sponsor-content">電話 | <br />
                    (02)2236-8277</p>
                </Col>
                <Col md="6" sm="6" className="sponsor-img">
                    <img src={ Sponsor4 } alt="Sponsor4" />
                </Col>
                <a href="https://reurl.cc/R4k23z" target="block">
                    <button className="sponsor-button">查看公司</button>
                </a>
            </Row>
            <Row className="sponsor-items">
                <Col md="6" sm="6" name="description">
                    <p className="sponsor-title">總匯更好</p>
                    <p className="sponsor-content">地址 | <br />
                    台北市文山區試院路82號</p>
                    <p className="sponsor-content">電話 | <br />
                    (02)2236-2633</p>
                </Col>
                <Col md="6" sm="6" className="sponsor-img">
                    <img src={ Sponsor5 } alt="Sponsor5" />
                </Col>
                <a href="https://www.facebook.com/alwaysbetter1719/" target="block">
                    <button className="sponsor-button">查看公司</button>
                </a>
            </Row>
            <Row className="sponsor-items">
                <Col md="6" sm="6" name="description">
                    <p className="sponsor-title">幫煮麵</p>
                    <p className="sponsor-content">地址 | <br />
                    台北市文山區試院路58-1號</p>
                    <p className="sponsor-content">電話 | <br />
                    無</p>
                </Col>
                <Col md="6" sm="6" className="sponsor-img">
                    <img src={ Sponsor6 } alt="Sponsor6" />
                </Col>
                <a href="https://goo.gl/maps/RsY2A5gNo9wEzKG79" target="block">
                    <button className="sponsor-button">查看公司</button>
                </a>
            </Row>
            <Row className="sponsor-items">
                <Col md="6" sm="6" name="description">
                    <p className="sponsor-title">益傳有限公司</p>
                    <p className="sponsor-content">地址 | <br />
                    台北市文山區木柵路一段66-7號</p>
                    <p className="sponsor-content">電話 | <br />
                    (02)2236-7501</p>
                </Col>
                <Col md="6" sm="6" className="sponsor-img">
                    <img src={ Sponsor7 } alt="Sponsor7" />
                </Col>
                <a href="https://goo.gl/maps/jCoXZk61EgzcYWBZ6" target="block">
                    <button className="sponsor-button">查看公司</button>
                </a>
            </Row>
            <Row className="sponsor-items">
                <Col md="6" sm="6" name="description">
                    <p className="sponsor-title">可睿創意整合<br />有限公司</p>
                    <p className="sponsor-content">地址 | <br />
                    台北市內湖區康樂街233號</p>
                    <p className="sponsor-content">電話 | <br />
                    (02)2633-0725</p>
                </Col>
                <Col md="6" sm="6" className="sponsor-img">
                    <img src={ Sponsor8 } alt="Sponsor8" />
                </Col>
                <a href="https://www.facebook.com/correct.design/" target="block">
                    <button className="sponsor-button">查看公司</button>
                </a>
            </Row>
        </Container>
        </div>
    )

}

export {  Sponsor };
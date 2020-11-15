import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Banner from '../img/banner.png';
import Logo from '../img/logo.png';
import Icon1 from '../img/icon1.png';
import Icon2 from '../img/icon2.png';
import Icon3 from '../img/icon3.png';
import Youtube from '../img/icon_youtube.png';
import Facebook from '../img/icon_facebook.png';
import Instgram from '../img/icon_instgram.png';
import Statement from './statement.jpg';

import './about.css';


const About = () => {
    return (
        <div>
            <Container>
                <Row className="banner-section">
                    <p className="banner-title">ABOUT US - 規劃組是什麼</p><hr />
                    <Row className="banner-img">
                        <img src={ Banner } alt="Banner" />
                    </Row>
                </Row>
                <Row>
                    <p className="description">不是規劃行程的規劃組</p>
                    <p className="contact">「規劃組是學什麼的？規劃行程嗎？我明年要去ＸＸ國玩你可以幫我排行程嗎？」這些是觀光系規劃組同學經常遇到的問題，從一開始的百口莫辯，一直到後來我們懶的解釋了，就假裝自己是規劃行程的，但心裡很清楚自己所走的路。</p>
                    <p className="contact">世新大學觀光學系前身為成立於1976年世界新聞專科三年制觀光宣導科，至1991年改制為世界新聞傳播學院公共傳播學系觀光組，1993年觀光學系正式獨立設系，2011年增設觀光規劃暨資源管理組，以專業區分為三個組：餐飲、住宿專業的餐旅組；旅運經營與行銷專業的旅遊組；以及觀光的基礎，遊憩資源開發專業的規劃組。</p>
                    <p className="contact key">「所以其實我們並不是學習如何規劃行程，而是學習如何開發、規劃觀光遊憩景點。」</p>
                    <p className="contact">就成立時間而言，相較於其他兩組，規劃組就像新生兒一樣，還在與世界磨合，吸收每一屆學長姊的經驗化作養分，持續的在成長；然而就學習的內容而言，規劃組卻一直站在最前方探索世界，努力為自己，為餐、旅組開拓一條新的道路。</p>
                </Row>
                <Row className="shutprm-section">
                    <p className="banner-title">畢業展覽介紹</p><hr />
                    <p className="contact">「陸」，是六的大寫，是陸地，同時也和「路」同音。在學習的過程中，我們接觸了各式各樣的陸，也和師長、同儕一起走過許許多多的路，留下了數不清的回憶。</p>
                    <p className="contact">如今我們即將邁向大學這條路的最後一里，畢展，就像是個路口，我們將在此創造最後共同的美好回憶，帶著它走向不同的，屬於各自的路；雖然聽似傷感，但我們仍生活在同一片陸地上，我們相信，總有一天，我們會在某個路口遇見更好的彼此。</p>
                    <p className="contact">本次活動為世新大學觀光系規劃暨資源管理組的畢業展覽，主要目的為提供規劃組學生綜合四年所學進行展出的機會，是大學四年的最後一個里程碑；同時透過展覽，向學生家長、親戚，校內外同學以及所有參展人員展示規劃組同學的學習內容與學習成果，使大家更了解規劃組，並且能提供給未來想就讀規劃組的學子們參考的資訊。</p>
                </Row>
            </Container>
            <div className="part">
                <img src={ Logo } alt="logo" className="part-logo"/>
            </div>
            <Container>
                <Row className="master-section">
                    <p className="banner-title">展覽主視覺介紹</p><hr />
                </Row>
                <Row className="master-contact">
                    <img src={ Icon1 } alt="Icon1" className="part-img"/>
                </Row>
                <Row className="master-contact">
                    <Col md="4" sm="12" className="master-description text-align-last">以學士帽意象作為整體塑形的構想，象徵身載著準畢業生身份的各位。帽穗則以LANDROAD的英文字組成。</Col>
                </Row>
                <Row className="master-contact">
                    <img src={ Icon2 } alt="Icon2" className="part-img"/>
                </Row>
                <Row className="master-contact">
                    <Col md="4" className="master-description text-align-last">集合「陸」與「路」的意義，陸地＋道路，即成地圖意象。更利用課程中常用及的土地使用分區概念，以不同顏色區分出兩字「陸」、「路」。</Col>
                </Row>
                <Row className="master-contact">
                    <img src={ Icon3 } alt="Icon3" className="part-img"/>
                </Row>
                <Row className="master-contact">
                    <Col md="4" className="master-description">仔細觀察道路的走向，其實構成了「陸」與「路」兩字。兩字區域分別也以不同顏色有所區分（以土地使用分區概念）</Col>
                </Row>
                <p className="special">選用綠色為主色，以表「陸地」意涵。</p>
                <Row className="justify-content-center social-section">
                    <a href="https://www.youtube.com/channel/UC8b5wCbq6wJqk1gNoRZv3CQ" className="icon-social">
                        <img src={ Youtube } alt="Icon3"/>
                    </a>
                    <a href="https://www.facebook.com/6thLandXRoad/" className="icon-social">
                        <img src={ Facebook } alt="Icon3"/>
                    </a>
                    <a href="https://www.instagram.com/landxroad_6th/" className="icon-social">
                        <img src={ Instgram } alt="Icon3"/>
                    </a>

                </Row>
                <img src={ Statement } alt="" className="pdf"/>
            </Container>
        </div>
    )
}

export { About };
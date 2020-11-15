import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';
import Iframe from 'react-iframe'

import G1 from '../img/work/G-01.svg';
import G2 from '../img/work/G-02.svg';
import G3 from '../img/work/G-03.svg';
import G4 from '../img/work/G-04.svg';
import G5 from '../img/work/G-05.svg';
import G6 from '../img/work/G-06.svg';
import G7 from '../img/work/G-07.svg';
import G8 from '../img/work/G-08.svg';
import G9 from '../img/work/G-09.svg';
import G10 from '../img/work/G-10.svg';
import G11 from '../img/work/G-11.svg';
import G12 from '../img/work/G-12.svg';
import G13 from '../img/work/G-13.svg';
import G14 from '../img/work/G-14.svg';
import G15 from '../img/work/G-15.svg';
import G16 from '../img/work/G-16.svg';
import G17 from '../img/work/G-17.svg';
import G18 from '../img/work/G-18.svg';
import G19 from '../img/work/G-19.svg';
import G20 from '../img/work/G-20.svg';
import G21 from '../img/work/G-21.svg';
import G22 from '../img/work/G-22.svg';
import G23 from '../img/work/G-23.svg';
import G24 from '../img/work/G-24.svg';
import G25 from '../img/work/G-25.svg';
import G26 from '../img/work/G-26.svg';
import G27 from '../img/work/G-27.svg';
import G28 from '../img/work/G-28.svg';
import G29 from '../img/work/G-29.svg';
import G30 from '../img/work/G-30.svg';
import G31 from '../img/work/G-31.svg';
import G32 from '../img/work/G-32.svg';
import G33 from '../img/work/G-33.svg';

import Person1 from '../img/work-personal/G01.jpg';
import Person2 from '../img/work-personal/G02.jpg';
import Person3 from '../img/work-personal/G03.jpeg';
import Person4 from '../img/work-personal/G04.jpg';
import G01 from '../img/work-personal/G1.jpg';
import G02 from '../img/work-personal/G2.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' }
  ];
  const personal = [
    { id: 1, src: G01, name: '鄭羽彤', description: '淡水-景美的通勤小孩，興趣是發文(?)，#美食 #旅遊 #日常，喜歡用照片、文字記錄生活', review: '實習過程中，從報到第一天就被叫去參與主管們開會時的膽戰心驚，到後來開始孰悉案子內容，協助進行了平面配置圖、建築物立面圖的繪製，充分應用了過去學到的AutoCAD和Photoshop技能也是透過了實習，才知道一塊土地開發以前，需要有這麼多繁複的事前準備工作，瞬間覺得自己身負重任，在未來的每個規劃上應該更加思慮周全。'},
    { id: 2, src: G02, name: '黃于凡', description: '我是中壢人不是桃園人（這很重要），我喜歡黑狗，以後養的狗要取叫「腳ㄟ」，我喜歡綠色的東西，所以我最愛森林，喜歡看地圖，看到假裝自己已經到過那些地方，所以我也喜歡散步，想走遍所有曾經在地圖看過的地方，但我很懶惰，而且拖延症很嚴重，誰可以救救我', review: '在城拓實習除了學習到各種技能與知識外，想起每次和公司前輩們談職場生活、談工作經歷、談志業志向，無形中都也成為了自己的養分，又再想起先前自己選擇實習的動機與期望，一個一個也都實踐且實現了，不禁感慨如果自己沒選擇實習會有多大的損失。但願自己未來能成為對社會有奉獻的人இдஇ'},
  ];

const WorkG = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1, 
        className: "slides",
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    }

    return (
        <div>
            <div className="description-section">
                <Container>
                    <Row>
                        <Col md="6" sm="12" className="content description-img">
                            <Slider {...settings} >
                                { images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} className="personal-img"/>) }
                            </Slider>                    
                        </Col>
                        <Col md="6" sm="12" className="content description-content">
                            <p>實習公司主要的工程技術顧問服務內容包含工程專案管理、建築、室內、景觀及土木、結構工程規劃設計監造、水土保持規劃設計監造及各類工程鑑定案。本案以推廣基隆市童軍暨生態遊學中心的自然生態資源以及觀光休憩功能，計畫以露營地形式作為未來經營管理目標。</p>
                            <div className="description-title">
                                <div>
                                    <h4>基隆市童軍暨<br/>生態遊學中心規劃案</h4>
                                    <h4><span>城拓工程顧問有限公司</span></h4>
                                </div>&nbsp;&nbsp;&nbsp;
                                <img src={ I } alt="" />
                            </div>                                                                        
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="member-section">
                <Slider {...settings} >
                    { personal.map((personals) => {
                        return (
                        <Container key={personals.id} className="display">
                        <Row>
                            <Col md="6" sm="12" className="content member-content">
                                <Row><p>Members</p><hr /></Row>
                                <p className="member-title">Name &nbsp;&nbsp;
                                    <span className="member-text">{ personals.name }</span>
                                </p>
                                <p className="member-title">Description</p>
                                <p className="member-text margin-top">{ personals.description }</p>
                                <p className="member-title">Review</p>
                                <p className="member-text margin-top">{ personals.review }</p>
                            </Col>
                            <Col md="6" sm="12" className="content member-img">
                                <img key={personal.id} src={personals.src} title={personals.name} alt={personals.description} className="personal-img"/>
                            </Col>
                        </Row>
                        </Container>
                        )
                    })}
                </Slider>
            </div>
            <img src={ G1 } alt="G1" />
            <img src={ G2 } alt="G2" />
            <img src={ G3 } alt="G3" />
            <img src={ G4 } alt="G4" />
            <img src={ G5 } alt="G5" />
            <img src={ G6 } alt="G6" />
            <img src={ G7 } alt="G7" />
            <img src={ G8 } alt="G8" />
            <img src={ G9 } alt="G9" />
            <img src={ G10 } alt="G10" />
            <img src={ G11 } alt="G11" />
            <img src={ G12 } alt="G12" />
            <img src={ G13 } alt="G13" />
            <img src={ G14 } alt="G14" />
            <img src={ G15 } alt="G15" />
            <img src={ G16 } alt="G16" />
            <img src={ G17 } alt="G17" />
            <img src={ G18 } alt="G18" />
            <img src={ G19 } alt="G19" />
            <img src={ G20 } alt="G20" />
            <img src={ G21 } alt="G21" />
            <img src={ G22 } alt="G22" />
            <img src={ G23 } alt="G23" />
            <img src={ G24 } alt="G24" />
            <img src={ G25 } alt="G25" />
            <img src={ G26 } alt="G26" />
            <img src={ G27 } alt="G27" />
            <img src={ G28 } alt="G28" />
            <img src={ G29 } alt="G29" />
            <img src={ G30 } alt="G30" />
            <img src={ G31 } alt="G31" />
            <img src={ G32 } alt="G32" />
            <img src={ G33 } alt="G33" />
            <Container className="youtube">
            {/* <iframe src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <Iframe url="https://www.youtube.com/embed/SMjU-IF3xDg"
                className="youtube"
                display="initial"
                position="relative"/>
            </Container>
        </div>
    )
}

export { WorkG };
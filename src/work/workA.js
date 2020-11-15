import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import I from '../img/i.png';
import Slider from "react-slick";


import A1 from '../img/work/A-01.svg';
import A2 from '../img/work/A-02.svg';
import A3 from '../img/work/A-03.svg';
import A4 from '../img/work/A-04.svg';
import A5 from '../img/work/A-05.svg';
import A6 from '../img/work/A-06.svg';
import A7 from '../img/work/A-07.svg';
import A8 from '../img/work/A-08.svg';
import A9 from '../img/work/A-09.svg';
import A10 from '../img/work/A-10.svg';
import A11 from '../img/work/A-11.svg';
import A12 from '../img/work/A-12.svg';
import A13 from '../img/work/A-13.svg';

import Person1 from '../img/work-personal/A01.jpg';
import Person2 from '../img/work-personal/A02.jpg';
import Person3 from '../img/work-personal/A03.jpg';
import A01 from '../img/work-personal/A1.jpg';
import A02 from '../img/work-personal/A2.jpg';
import A03 from '../img/work-personal/A3.jpg';
import A04 from '../img/work-personal/A4.jpg';
const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' }
  ];
  const personal = [
    { id: 1, src: A01, name: '葉顏齊', description: '永和葉哥。' },
    { id: 2, src: A02, name: '王以安', description: '台北人，熱愛運動和唱歌，期望自己有能力照顧自己愛的人。' },
    { id: 3, src: A03, name: '魏平萱', description: '台北人，喜愛戶外活動、熱愛大自然，尤其是大海。' },
    { id: 4, src: A04, name: '張妤瑄', description: '三峽夥伴，喜歡都市也喜歡鄉下，更喜歡待在舒適圈，期待踏出去的那天。' },
  ];
const WorkA = () => {
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
                            <p> 東區商圈曾經為北市熱鬧繁華地區，但近幾年發現東區商圈店家不斷倒閉、遷出及出租，令人覺得很惋惜；藉由這次的專題，我們希望能幫助東區找到更明確的定位。為給予東區商圈定位，我們將藉由實際調查盤點了解商圈資源；學習設計問卷了解東區在社會大眾中具有何意象；以及分析曾舉辦在東區的活動適宜性，找出東區的特性，了解東區並提供更多資料讓東區活躍起來。</p>
                            <div className="description-title">
                                <div>
                                    <h4>東區亮起來</h4>
                                    <h4><span>台北市東區商圈<br />發展潛力與阻礙調查計畫</span></h4>
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
            <img src={ A1 } alt="A1" />
            <img src={ A2 } alt="A2" />
            <img src={ A3 } alt="A3" />
            <img src={ A4 } alt="A4" />
            <img src={ A5 } alt="A5" />
            <img src={ A6 } alt="A6" />
            <img src={ A7 } alt="A7" />
            <img src={ A8 } alt="A8" />
            <img src={ A9 } alt="A9" />
            <img src={ A10 } alt="A10" />
            <img src={ A11 } alt="A11" />
            <img src={ A12 } alt="A12" />
            <img src={ A13 } alt="A13" />
        </div>
    )
}

export { WorkA };
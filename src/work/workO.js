import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';

import O1 from '../img/work/O-01.svg';
import O2 from '../img/work/O-02.svg';
import O3 from '../img/work/O-03.svg';

import Person1 from '../img/work-personal/O01.jpg';
import Person2 from '../img/work-personal/O02.jpg';
import Person3 from '../img/work-personal/O03.jpg';
import Person4 from '../img/work-personal/O04.jpg';
import Person5 from '../img/work-personal/O05.jpg';
import O01 from '../img/work-personal/O1.JPG';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' },
    { id: 5, src: Person5, title: 'Person5', description: 'Person5' }
  ];
  const personal = [
    { id: 1, src: O01, name: '李淑梅', description: '我是印尼僑生來臺已4年。學過觀光行銷企劃之後，我發現對行銷活動有興趣。所以我想深入瞭解在職場上的行銷活動的工作。希望透過實習對我未來的方向有幫助。', review: '透過4個月在可睿創意整合有限公司實習是特別的經驗也機會，可學時間管理、更瞭解職場狀況尤其是行銷活動工作、解決問題與溝通。然後更瞭解有上過的課程也有很多幫助，例如：觀光行銷企劃、0電腦與資訊科技、基地分析調查、行銷管理、觀光環境美學、與0電腦圖面表現法。'},
  ];

const WorkO = () => {
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
                            <p>樹林早期有「紅露酒故鄉」的美名，為推廣樹林紅麴產業，從2007年開始舉辦紅麴文化節，今年2019年是第13屆，共同打造紅麴文化節嘉年華盛會。</p>
                            <div className="description-title">
                                <div>
                                    <h4>2019<br/>樹林紅麴米文化節</h4>
                                    <h4><span>可睿創意整合<br/>有限公司</span></h4>
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
            <img src={ O1 } alt="O1" />
            <img src={ O2 } alt="O2" />
            <img src={ O3 } alt="O3" />

        </div>
    )
}

export { WorkO };
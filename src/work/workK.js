import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';
import K1 from '../img/work/K-01.svg';
import K2 from '../img/work/K-02.svg';
import K3 from '../img/work/K-03.svg';
import K4 from '../img/work/K-04.svg';
import K5 from '../img/work/K-05.svg';
import K6 from '../img/work/K-06.svg';
import K7 from '../img/work/K-07.svg';
import K8 from '../img/work/K-08.svg';

import Person1 from '../img/work-personal/K01.jpg';
import Person2 from '../img/work-personal/K02.jpg';
import Person3 from '../img/work-personal/K03.jpg';
import Person4 from '../img/work-personal/K04.jpg';
import Person5 from '../img/work-personal/K05.jpg';
import K01 from '../img/work-personal/K1.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' },
    { id: 5, src: Person5, title: 'Person5', description: 'Person5' },
  ];
  const personal = [
    { id: 1, src: K01, name: '許瑋琪', description: '就讀世新大學觀光規劃暨資源管理學系四年級，愛狗人士。', review: '實習期間在事務部、休閒餐飲部、風車HOUSE、三個部門實習。並與中華民國露營休閒車協會合作【桃園市露營場管理計畫採購案】。想了解露營產業的發展現況，就到我的網頁看看吧！' },
  ];

const WorkK = () => {
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
                            <p>近年來興起露營風潮，新型態露營活動已是不分男女老幼、年齡大小都能參與的全民性戶外休閒活動，為想了解露營場環境規劃、學習露營場經營管理選擇經營管理體制十分成熟的皇后鎮森林露營場實習。</p>
                            <div className="description-title">
                                <div>
                                    <h4>皇后鎮森林露營場<br/>經營管理</h4>
                                    <h4><span>金山皇后鎮露營區</span></h4>
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
            <img src={ K1 } alt="K1" />
            <img src={ K2 } alt="K2" />
            <img src={ K3 } alt="K3" />
            <img src={ K4 } alt="K4" />
            <img src={ K5 } alt="K5" />
            <img src={ K6 } alt="K6" />
            <img src={ K7 } alt="K7" />
            <img src={ K8 } alt="K8" />
            
        </div>
    )
}

export { WorkK };
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';

import L1 from '../img/work/L-01.svg';
import L2 from '../img/work/L-02.svg';
import L3 from '../img/work/L-03.svg';
import L4 from '../img/work/L-04.svg';
import L5 from '../img/work/L-05.svg';
import L6 from '../img/work/L-06.svg';
import L7 from '../img/work/L-07.svg';
import L8 from '../img/work/L-08.svg';
import L9 from '../img/work/L-09.svg';
import L10 from '../img/work/L-10.svg';

import Person1 from '../img/work-personal/L01.jpg';
import L01 from '../img/work-personal/L1.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' }
  ];
  const personal = [
    { id: 1, src: L01, name: '柯淳珮', description: '拖拖拉拉的懶癌末期，不喜歡打工卻不得不打工的資深肯德基員工'},
  ];


const WorkL = () => {
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
                            <p>南門中繼市場是一個臨時性的建設，旁邊原為華光社區的一塊空地，利用貨櫃的易構性、價格低廉等色，進行實驗性的規劃，近幾年貨櫃屋元素被大量運用，看中他的商機，以及創意組合等因素，可以吸引觀光客到此進行觀光活動，藉由南門中繼市場的熱潮，進一步可以帶入相關的產業活動，嘗試這樣的性質在未來是否可以被廣泛地規劃及利用。</p>
                            <div className="description-title">
                                <div>
                                    <h4>貨櫃屋創意市集發展計畫<br/>以南門中繼市場旁<br/>國有土地為例</h4>
                                    <h4><span>貨櫃元素為觀光產業<br/>帶來之影響</span></h4>
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
            <img src={ L1 } alt="L1" />
            <img src={ L2 } alt="L2" />
            <img src={ L3 } alt="L3" />
            <img src={ L4 } alt="L4" />
            <img src={ L5 } alt="L5" />
            <img src={ L6 } alt="L6" />
            <img src={ L7 } alt="L7" />
            <img src={ L8 } alt="L8" />
            <img src={ L9 } alt="L9" />
            <img src={ L10 } alt="L10" />
            
        </div>
    )
}

export { WorkL };
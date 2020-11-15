import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';

import N1 from '../img/work/N-01.svg';
import N2 from '../img/work/N-02.svg';
import N3 from '../img/work/N-03.svg';
import N4 from '../img/work/N-04.svg';
import N5 from '../img/work/N-05.svg';
import N6 from '../img/work/N-06.svg';
import N7 from '../img/work/N-07.svg';
import N8 from '../img/work/N-08.svg';
import N9 from '../img/work/N-09.svg';
import N10 from '../img/work/N-10.svg';

import Person1 from '../img/work-personal/N01.jpeg';
import Person2 from '../img/work-personal/N02.jpg';
import Person3 from '../img/work-personal/N03.jpg';
import Person4 from '../img/work-personal/N04.jpg';
import N01 from '../img/work-personal/N1.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' }
  ];
  const personal = [
    { id: 1, src: N01, name: '蔡宜婷', description: '有點懶，喜歡電影&夢想下輩子當顆石頭(=´ᴥ`)'},
  ];


const WorkN = () => {
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
                            <p>近年來，人們對於空間的消費需求逐漸偏向多樣化，不再滿足於單純的物質享受，更偏好物質與精神上的享受。大眾對於美學、藝術活動的參與也較過去熱絡，藝術創作者有別以往只能在官方的美術館及藝廊進行展覽活動，許多中、小型空間為了應對資金問題、消費模式的改變，紛紛在空間裡加入不同的元素，結合藝文活動、餐飲、書籍等休閒功能，使得藝術平民化、生活化，更因此成為一種空間經營模式的趨勢之一。</p>
                            <div className="description-title">
                                <div>
                                    <h4>複合式藝文空間<br/>經營管理研究</h4>
                                    <h4><span>另類</span></h4>
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
            <img src={ N1 } alt="N1" />
            <img src={ N2 } alt="N2" />
            <img src={ N3 } alt="N3" />
            <img src={ N4 } alt="N4" />
            <img src={ N5 } alt="N5" />
            <img src={ N6 } alt="N6" />
            <img src={ N7 } alt="N7" />
            <img src={ N8 } alt="N8" />
            <img src={ N9 } alt="N9" />
            <img src={ N10 } alt="N10" />

        </div>
    )
}

export { WorkN };
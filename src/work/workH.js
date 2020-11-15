import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';

import H1 from '../img/work/H-01.svg';
import H2 from '../img/work/H-02.svg';
import H3 from '../img/work/H-03.svg';
import H4 from '../img/work/H-04.svg';
import H5 from '../img/work/H-05.svg';
import H6 from '../img/work/H-06.svg';
import H7 from '../img/work/H-07.svg';
import H8 from '../img/work/H-08.svg';
import H9 from '../img/work/H-09.svg';
import H10 from '../img/work/H-10.svg';
import H11 from '../img/work/H-11.svg';

import Person1 from '../img/work-personal/H01.jpg';
import Person2 from '../img/work-personal/H02.jpg';
import Person3 from '../img/work-personal/H03.jpg';
import H01 from '../img/work-personal/H1.png';
import H02 from '../img/work-personal/H2.png';
import H03 from '../img/work-personal/H3.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' }
  ];
  const personal = [
    { id: 1, src: H01, name: '洪偉誠', description: '喜歡運動的大學生，希望透過遊山玩水的方式好好認識台灣這個好地方'},
    { id: 2, src: H02, name: '陳于傑', description: '普通的大學生'},
    { id: 3, src: H03, name: '張瀚森', description: '一個渴望回去上課，但因為疫情還滯留在家的人'}
  ];



const WorkH = () => {
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
                            <p>九份和金瓜石幾乎是每個住在台北市的人都會拜訪的觀光景點；但大家所不知道，與這兩處景點同樣劃為「水金九」遊憩計畫內的水湳洞；其在觀光發展的潛力十足，具有多元的自然條件、地理條件和人文歷史，近年來透過展演活動、影視劇的行銷下逐漸被大眾所認識 。地理位置上，水湳洞是濱海公路前往黃金瀑布、九份老街和金瓜石的必經之路，周邊也有著許多的景點。</p>
                            <div className="description-title">
                                <div>
                                    <h4>水湳洞漁港地方創生</h4>
                                    <h4><span>北海岸水湳洞漁港<br/>活化發展營造</span></h4>
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
            <img src={ H1 } alt="H1" />
            <img src={ H2 } alt="H2" />
            <img src={ H3 } alt="H3" />
            <img src={ H4 } alt="H4" />
            <img src={ H5 } alt="H5" />
            <img src={ H6 } alt="H6" />
            <img src={ H7 } alt="H7" />
            <img src={ H8 } alt="H8" />
            <img src={ H9 } alt="H9" />
            <img src={ H10 } alt="H10" />
            <img src={ H11 } alt="H11" />

        </div>
    )
}

export { WorkH };
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';

import I1 from '../img/work/I-01.svg';
import I2 from '../img/work/I-02.svg';
import I3 from '../img/work/I-03.svg';
import I4 from '../img/work/I-04.svg';
import I5 from '../img/work/I-05.svg';
import I6 from '../img/work/I-06.svg';

import Person1 from '../img/work-personal/I01.jpg';
import Person2 from '../img/work-personal/I02.jpg';
import Person3 from '../img/work-personal/I03.jpg';
import Person4 from '../img/work-personal/I04.jpg';
import I01 from '../img/work-personal/I1.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' }
  ];
  const personal = [
    { id: 1, src: I01, name: '廖羿涵', description: '活潑外向、熱愛美食的龜毛處女座女子。', review: '在行銷公司實習讓我了解，舉辦一場活動的前置準備需要付出非常多的心力。這兩個多月非常忙碌、辛苦，但是學習到很多，也得到非常寶貴的實作經驗。'},
  ];


const WorkI = () => {
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
                            <p>「嘟嘟好野餐派對」是我在實習尾聲，和另一位同期實習生共同負責的小活動。與桃園市環保局合作，活動環節緊扣「吃在地食當季」、「惜食」、「節能鍋具料理秀」、「廚餘變身清潔劑」等環保觀念，讓參加民眾在活動中，同時學習「環境教育」的觀念。</p>
                            <div className="description-title">
                                <div>
                                    <h4>桃園市環保局X翔啓創意行銷<br/>「嘟嘟好野餐派對」</h4>
                                    <h4><span>翔啓創意行銷</span></h4>
                                </div>
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
            <img src={ I1 } alt="I1" />
            <img src={ I2 } alt="I2" />
            <img src={ I3 } alt="I3" />
            <img src={ I4 } alt="I4" />
            <img src={ I5 } alt="I5" />
            <img src={ I6 } alt="I6" />

        </div>
    )
}

export { WorkI };
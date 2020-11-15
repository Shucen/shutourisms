import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';

import R1 from '../img/work/R-01.svg';
import R2 from '../img/work/R-02.svg';
import R3 from '../img/work/R-03.svg';
import R4 from '../img/work/R-04.svg';
import R5 from '../img/work/R-05.svg';
import R6 from '../img/work/R-06.svg';
import R7 from '../img/work/R-07.svg';
import R8 from '../img/work/R-08.svg';
import R9 from '../img/work/R-09.svg';

import Person1 from '../img/work-personal/R01.jpg';
import Person2 from '../img/work-personal/R02.jpg';
import Person3 from '../img/work-personal/R03.jpg';
import R01 from '../img/work-personal/R1.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' }
  ];
  const personal = [
    { id: 1, src: R01, name: '王采蓁', description: '喜歡日本，想將所體驗到的分享給大家。'}
  ];

const WorkR = () => {
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
                            <p>大四暑假時前往了日本小豆島實習，並參與了日本瀨戶內國際藝術祭的活動服務，在實習過程中發現這個大型的藝術祭活動帶來了眾多的海內外觀光客，讓原本不起眼的地方瞬間成為著名的觀光景點，也讓當地的觀光發展更加活躍。也因此發現了藝術的觀光潛力，希望能將此案例發展在台灣，在碧潭規劃一個大型的藝術祭活動，增加國際間的藝術交流並加強當地的觀光發展。</p>
                            <div className="description-title">
                                <div>
                                    <h4>當我們連在「藝」起-<br/>碧潭河岸藝術季</h4>
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
            <img src={ R1 } alt="R1" />
            <img src={ R2 } alt="R2" />
            <img src={ R3 } alt="R3" />
            <img src={ R4 } alt="R4" />
            <img src={ R5 } alt="R5" />
            <img src={ R6 } alt="R6" />
            <img src={ R7 } alt="R7" />
            <img src={ R8 } alt="R8" />
            <img src={ R9 } alt="R9" />
        </div>
    )
}

export { WorkR };
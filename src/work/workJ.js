import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';
import J1 from '../img/work/J-01.svg';
import J2 from '../img/work/J-02.svg';
import J3 from '../img/work/J-03.svg';
import J4 from '../img/work/J-04.svg';
import J5 from '../img/work/J-05.svg';
import J6 from '../img/work/J-06.svg';
import J7 from '../img/work/J-07.svg';
import J8 from '../img/work/J-08.svg';
import J9 from '../img/work/J-09.svg';
import J10 from '../img/work/J-10.svg';
import J11 from '../img/work/J-11.svg';
import J12 from '../img/work/J-12.svg';
import J13 from '../img/work/J-13.svg';
import J14 from '../img/work/J-14.svg';
import J15 from '../img/work/J-15.svg';
import J16 from '../img/work/J-16.svg';

import Person1 from '../img/work-personal/J01.jpg';
import Person2 from '../img/work-personal/J02.jpg';
import Person3 from '../img/work-personal/J03.jpg';
import Person4 from '../img/work-personal/J04.jpg';
import J01 from '../img/work-personal/J1.jpg';
import J02 from '../img/work-personal/J2.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' },
  ];
  const personal = [
    { id: 1, src: J01, name: '陳思佑', description: '喜歡出去玩、熱愛賺錢、愛吃。', review: '做完這次參與式規劃的活動，覺得要跟完全沒學過規劃的在地居民合作、一起去探索景美，是件不簡單的事！很幸運我們能透過這次活動讓我們複習所學習到規劃的專業，過程中還學到了更多溝通的技巧，也認識了大學四年待的景美地區的歷史。' },
    { id: 2, src: J02, name: '廖珮雯', description: '熱愛化妝、畫畫、推理小說。', review: '經由這次的專題更加了解參與式規劃，與國中生相處下來每一次沒有不生氣的，也算是一次很好的經驗來體會到規劃師在與在地人之間溝通的辛苦及難處。' },
  ];

  const WorkJ = () => {
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
                            <p>這次的專題運用參與式規劃的手法並藉由與景興國中合作機會，在走街的活動中挖掘景美的歷史故事，讓在地的年輕人了解景美歷史並產生興趣後將當地的文化傳承下去，為30年的老店設計出商店娃娃，作為其形象廣告手法，吸引更多人的目光。</p>
                            <div className="description-title">
                                <div>
                                    <h4>景美地區<br/>參與式規劃</h4>
                                    <h4><span>小鎮故事-<br/>景美老店行銷規劃</span></h4>
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
            <img src={ J1 } alt="J1" />
            <img src={ J2 } alt="J2" />
            <img src={ J3 } alt="J3" />
            <img src={ J4 } alt="J4" />
            <img src={ J5 } alt="J5" />
            <img src={ J6 } alt="J6" />
            <img src={ J7 } alt="J7" />
            <img src={ J8 } alt="J8" />
            <img src={ J9 } alt="J9" />
            <img src={ J10 } alt="J10" />
            <img src={ J11 } alt="J11" />
            <img src={ J12 } alt="J12" />
            <img src={ J13 } alt="J13" />
            <img src={ J14 } alt="J14" />
            <img src={ J15 } alt="J15" />
            <img src={ J16 } alt="J16" />

        </div>
    )
}

export { WorkJ };
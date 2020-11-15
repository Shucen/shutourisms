import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';

import F1 from '../img/work/F-01.svg';
import F2 from '../img/work/F-02.svg';
import F3 from '../img/work/F-03.svg';
import F4 from '../img/work/F-04.svg';
import F5 from '../img/work/F-05.svg';
import F6 from '../img/work/F-06.svg';
import F7 from '../img/work/F-07.svg';
import F8 from '../img/work/F-08.svg';
import F9 from '../img/work/F-09.svg';
import { ReactComponent as F10} from '../img/work/F-10.svg';

import Person1 from '../img/work-personal/F01.jpg';
import Person2 from '../img/work-personal/F02.jpg';
import F01 from '../img/work-personal/F1.jpg';
import F02 from '../img/work-personal/F2.jpg';
import F03 from '../img/work-personal/F3.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' }
  ];
  const personal = [
    { id: 1, src: F01, name: '蔡名翔', description: '台中北屯人，自高中繁星計畫進來世新大學，雖然不是自己心裡想讀的科系，但不會後悔在這相處的時刻。'},
    { id: 2, src: F02, name: '劉佳麗', description: '19歲時遠離家鄉，從馬來西亞來，完全沒有接觸的課程，覺得很困難，充滿壓力，在組員的協助下了解更多。'},
    { id: 3, src: F03, name: '陳雅婕', description: '大三的時候轉入規劃組，原本完全不懂規劃組在學什麼，透過專題更了解。'},
  ];


const WorkF = () => {
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
                            <p>原是恆光國小預定地，後來台北市政府決定不予興建，經通盤檢討過後，將原徵收土地發還，剩餘之教育部土地更改為公園用地，因此我們利用這塊尚未開發的綠地做基地調查、實地訪談與規畫設計等，將此綠地設計為實用型的多元多功能公園，希望此處能成為有在地歸屬感的社區公園。<br/>
                            小組心得：<br/>
                            從整個專題過程中，透過基地分析調查與現況調查學習透過規劃構想去做公園分區及設計，最後再做經營管理，讓我們更了解規劃一個公園需有哪些管理計畫及策略。</p>
                            <div className="description-title">
                                <div>
                                    <h4>恆光國小</h4>
                                    <h4><span>恆光國小預定地之<br/>基地背景與未來發展</span></h4>
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
            <img src={ F1 } alt="F1" />
            <img src={ F2 } alt="F2" />
            <img src={ F3 } alt="F3" />
            <img src={ F4 } alt="F4" />
            <img src={ F5 } alt="F5" />
            <img src={ F6 } alt="F6" />
            <img src={ F7 } alt="F7" />
            <img src={ F8 } alt="F8" />
            <img src={ F9 } alt="F9" />
            <F10 />
        </div>
    )
}

export { WorkF };
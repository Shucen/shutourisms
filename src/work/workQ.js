import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';

import Q1 from '../img/work/Q-01.svg';
import Q2 from '../img/work/Q-02.svg';
import Q3 from '../img/work/Q-03.svg';
import Q4 from '../img/work/Q-04.svg';
import Q5 from '../img/work/Q-05.svg';
import Q6 from '../img/work/Q-06.svg';
import Q7 from '../img/work/Q-07.svg';
import Q8 from '../img/work/Q-08.svg';
import Q9 from '../img/work/Q-09.svg';
import Q10 from '../img/work/Q-10.svg';
import Q11 from '../img/work/Q-11.svg';
import Q12 from '../img/work/Q-12.svg';
import Q13 from '../img/work/Q-13.svg';
import Q14 from '../img/work/Q-14.svg';
import Q15 from '../img/work/Q-15.svg';
import Q16 from '../img/work/Q-16.svg';
import Q17 from '../img/work/Q-17.svg';
import Q18 from '../img/work/Q-18.svg';
import Q19 from '../img/work/Q-19.svg';
import Q20 from '../img/work/Q-20.svg';
import Q21 from '../img/work/Q-21.svg';
import Q22 from '../img/work/Q-22.svg';

import Person1 from '../img/work-personal/Q01.jpg';
import Person2 from '../img/work-personal/Q02.jpg';
import Person3 from '../img/work-personal/Q03.jpg';
import Person4 from '../img/work-personal/Q04.jpg';
import Person5 from '../img/work-personal/Q05.jpg';
import Person6 from '../img/work-personal/Q06.jpg';
import Person7 from '../img/work-personal/Q07.jpg';
import Q01 from '../img/work-personal/Q1.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' },
    { id: 5, src: Person5, title: 'Person5', description: 'Person5' },
    { id: 6, src: Person6, title: 'Person6', description: 'Person6' },
    { id: 7, src: Person7, title: 'Person7', description: 'Person7' }
  ];
  const personal = [
    { id: 1, src: Q01, name: '黃存蔓', description: '嘉義人，是狗派，但也很愛吸貓。不打排球的時候就是一個動畫電玩宅，夢想之一是能擁有自己的高級廚房，喜歡嘗試各種新奇有趣的事物，討厭香菜。', review: '第一次站在政府的角度聽人民的聲音，有些滿懷期待，有些激動憤怒，有些苦苦哀求。想知道更多我在市政府發現的有趣故事嗎?快來看看我的作品吧!'},
  ];

const WorkQ = () => {
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
                            <p>我在暑假開啟了市政府大冒險，朝九晚五，和公務員一起上下班。從申請圖資的人變成幫人申請圖資的人，旁聽與都市發展相關的會議，在一旁學習民間企業與政府的合作模式。參與一日市長活動，和擁有不同專長的青年共同討論各項議題，並提出相關解決政策。透過鐵路高架化的走讀工作坊，和大家沿著鐵路發現過去從未發現的鐵路故事。</p>
                            <div className="description-title">
                                <div>
                                    <h4>市政府大冒險</h4>
                                    <h4><span>嘉義市政府<br />都市發展處</span></h4>
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
            <img src={ Q1 } alt="Q1" />
            <img src={ Q2 } alt="Q2" />
            <img src={ Q3 } alt="Q3" />
            <img src={ Q4 } alt="Q4" />
            <img src={ Q5 } alt="Q5" />
            <img src={ Q6 } alt="Q6" />
            <img src={ Q7 } alt="Q7" />
            <img src={ Q8 } alt="Q8" />
            <img src={ Q9 } alt="Q9" />
            <img src={ Q10 } alt="Q10" />
            <img src={ Q11 } alt="Q11" />
            <img src={ Q12 } alt="Q12" />
            <img src={ Q13 } alt="Q13" />
            <img src={ Q14 } alt="Q14" />
            <img src={ Q15 } alt="Q15" />
            <img src={ Q16 } alt="Q16" />
            <img src={ Q17 } alt="Q17" />
            <img src={ Q18 } alt="Q18" />
            <img src={ Q19 } alt="Q19" />
            <img src={ Q20 } alt="Q20" />
            <img src={ Q21 } alt="Q21" />
            <img src={ Q22 } alt="Q22" />

        </div>
    )
}

export { WorkQ };
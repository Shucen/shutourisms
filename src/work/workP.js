import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';

import P1 from '../img/work/P_1.svg';
import P2 from '../img/work/P_2.svg';
import P3 from '../img/work/P_3.svg';
import P4 from '../img/work/P_4.svg';
import P5 from '../img/work/P_5.svg';
import P6 from '../img/work/P_6.svg';
import P7 from '../img/work/P_7.svg';
import P8 from '../img/work/P_8.svg';
import P9 from '../img/work/P_9.svg';

import Person1 from '../img/work-personal/P01.jpg';
import Person2 from '../img/work-personal/P02.jpg';
import Person3 from '../img/work-personal/P03.jpg';
import Person4 from '../img/work-personal/P04.jpg';
import Person5 from '../img/work-personal/P05.jpg';
import P01 from '../img/work-personal/P1.png';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' },
    { id: 5, src: Person5, title: 'Person5', description: 'Person5' }
  ];
  const personal = [
    { id: 1, src: P01, name: '張明雍', description: '性別：男，出生：1998年，出生地：台北市，學歷：世新大學 觀光系觀光規劃暨資源管理組，現職：學生，興趣與專長：派對主持、游泳救生及教練，獲獎紀錄：科技部計畫(貨櫃元素為觀光空間帶來之影響)'},
  ];

const WorkP = () => {
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
                        <Col md="6" sm="12" className="description-content content-p">
                            <p>櫃屋作為各式使用空間之案例因貨櫃之臨時性、高可塑性等特質，使貨櫃屋做為空間使用之成功案例吸引世界範圍內觀光資源管理者紛紛對成功案例進行複製，台灣作為通訊資源高度發展之地區也有多商業空間選擇這樣一個創新的開發模式，並以適地性、市場需求等因素對其使用模式進行直接或間接之改良，近年國土規畫領域已將永續發展概念作為核心價值，此一改變將透過對土地法規之改革間接影響觀光產業，並直接影響部分產業空間使用及規劃現況。管理學之父Peter Drucker以創新為主軸貫穿其管理學理念，並認為「不創新，即滅亡」（innovate or die），而創新並不只作為市場競爭的利器，同時也有著善用人類社會獨有智慧積累特性不斷革新並且未達最佳利益而不斷創造的意涵，若將貨櫃屋作為創意空間進入市場視為一種破壞式創新，是否足以顯示貨櫃屋對於觀光市場之可能性，破壞性創新的過程雖會影響總體市場之穩定，但同時也能透過市場中的競爭及淘汰機制已達進步及改革之效用。因建材特質及利用模式使社會對建材產生刻板印象，本文認為對輕鋼構建物的傳統評價是一謬思，問題並非出自貨櫃本身而是最初實施貨櫃作為空間使用一概念的族群較為弱勢，社會正義無法完美落實進而侷限普羅大眾對建物的想像甚至產生歧視。建物解放的概念以各種形式廣泛出現在世界範圍內，本專題認為「帶著走的房子」不僅僅是為遊憩活動而設計，其中包含對於土地霸權的反叛及解放建物不可移動的傳統思考模式。<br/>計畫編號：108-2813-C-128-013-H</p>
                            <div className="description-title">
                                <div>
                                    <h4>齒輪</h4>
                                    <h4><span>貨櫃屋為觀光空間<br/>帶來的影響</span></h4>
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
            <div>
            <img src={ P1 } alt="P1" />
            <img src={ P2 } alt="P2" />
            <img src={ P3 } alt="P3" />
            <img src={ P4 } alt="P4" />
            <img src={ P5 } alt="P5" />
            <img src={ P6 } alt="P6" />
            <img src={ P7 } alt="P7" />
            <img src={ P8 } alt="P8" />
            <img src={ P9 } alt="P9" />
            </div>
        </div>
    )
}

export { WorkP };

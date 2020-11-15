import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';
import D1 from '../img/work/D-01.svg';
import D2 from '../img/work/D-02.svg';
import D3 from '../img/work/D-03.svg';
import D4 from '../img/work/D-04.svg';
import D5 from '../img/work/D-05.svg';
import D6 from '../img/work/D-06.svg';
import D7 from '../img/work/D-07.svg';
import D8 from '../img/work/D-08.svg';
import D9 from '../img/work/D-09.svg';
import D10 from '../img/work/D-10.svg';
import D11 from '../img/work/D-11.svg';
import D12 from '../img/work/D-12.svg';
import D13 from '../img/work/D-13.svg';

import Person1 from '../img/work-personal/D01.jpg';
import Person2 from '../img/work-personal/D02.jpg';
import Person3 from '../img/work-personal/D03.jpg';
import Person4 from '../img/work-personal/D04.jpg';
import Person5 from '../img/work-personal/D05.jpg';
import D01 from '../img/work-personal/D1.jpg';
import D02 from '../img/work-personal/D2.jpg';
import D03 from '../img/work-personal/D3.jpg';
import D04 from '../img/work-personal/D4.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' },
    { id: 5, src: Person5, title: 'Person5', description: 'Person5' },
  ];
  const personal = [
    { id: 1, src: D01, name: '蕭妤蘋', description: '桃園人。(離開家才知道家的好)，喜歡乳酪蛋糕(˶‾᷄ ⁻̫ ‾᷅˵)，無法接受拖拉，偏偏我的組員都有嚴重拖延症，最近在努力學會檢討自己，想要做到的事就會栽進去、堅持一定要做到啦！' },
    { id: 2, src: D02, name: '王凈錞', description: '桃園跟南投純正混血(￣∇￣)，家裡成員有6位，摯愛的人是阿嬤。卯迷最可愛( ՞ټ՞)' },
    { id: 3, src: D03, name: '陳柏峰', description: '隨時隨地都在餓的組員，幾乎每次開會都在吃，好像就沒有其他作用了，不過有時候會天外飛來一筆，想到不出的點子，個性還算不錯，不太會給組員添麻煩。很大管。' },
    { id: 4, src: D04, name: '鄭宇捷', description: '土生土長臺北人，牡羊愛狗人士， 興趣是打棒球跟聽饒舌（s/o to Jony J，除了學業外常跑社團，主要參與服務性社團活動為主。' },
  ];


const WorkD = () => {
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
                            <p>石碇是一個隱身在新北這個大都市裡的小山城，居民多為純樸，是一個遠離塵囂的好地方。
                            雖然石碇觀光發展協會近年來努力行銷、舉辦活動，但旁邊因有坪林而常被大家忘記。
                            我們認為這個地方不該被遺忘，因此我們來拯救他了!<br/>
                            小組心得：
                            我們透過地方創生指引計畫書中的案例將石碇分成五大類的代表色及意象圖，並盤點了石碇的觀光資源。其實石碇只是需要人們放慢步調，慢慢去品味屬於他們的慢活腳步。</p>
                            <div className="description-title">
                                <div>
                                    <h4>想碇你</h4>
                                    <h4><span>慢活石碇<br/>新北市石碇區地方<br/>一項構想計畫</span></h4>
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
            <img src={ D1 } alt="D1" />
            <img src={ D2 } alt="D2" />
            <img src={ D3 } alt="D3" />
            <img src={ D4 } alt="D4" />
            <img src={ D5 } alt="D5" />
            <img src={ D6 } alt="D6" />
            <img src={ D7 } alt="D7" />
            <img src={ D8 } alt="D8" />
            <img src={ D9 } alt="D9" />
            <img src={ D10 } alt="D10" />
            <img src={ D11 } alt="D11" />
            <img src={ D12 } alt="D12" />
            <img src={ D13 } alt="D13" />

        </div>
    )
}

export { WorkD };
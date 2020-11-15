import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';

import B1 from '../img/work/B-01.svg';
import B2 from '../img/work/B-02.svg';
import B3 from '../img/work/B-03.svg';
import B4 from '../img/work/B-04.svg';
import B5 from '../img/work/B-05.svg';
import B6 from '../img/work/B-06.svg';
import B7 from '../img/work/B-07.svg';
import B8 from '../img/work/B-08.svg';
import B9 from '../img/work/B-09.svg';
import B10 from '../img/work/B-10.svg';
import B11 from '../img/work/B-11.svg';
import B12 from '../img/work/B-12.svg';
import B13 from '../img/work/B-13.svg';
import B14 from '../img/work/B-14.svg';
import B15 from '../img/work/B-15.svg';

import Person1 from '../img/work-personal/B01.jpg';
import Person2 from '../img/work-personal/B02.jpg';
import Person3 from '../img/work-personal/B03.jpg';
import Person4 from '../img/work-personal/B04.jpg';
import B01 from '../img/work-personal/B1.jpg';
import B02 from '../img/work-personal/B2.jpg';
import B03 from '../img/work-personal/B3.jpg';
import B04 from '../img/work-personal/B4.jpg';


const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' },
  ];
  const personal = [
    { id: 1, src: B01, name: '劉瑋玲', description: '聰明伶俐小阿玲，苗栗田僑仔' },
    { id: 2, src: B02, name: '謝念紜', description: '鬼靈精怪美如紜，三重地頭蛇' },
    { id: 3, src: B03, name: '曾奕瑄', description: '有夠可愛小瑄瑄，萬華八家玖' },
    { id: 4, src: B04, name: '毛渝鈞', description: '短小精幹小狼鈞，板橋一條龍' },
  ];
const WorkB = () => {
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
                            <p>大家好！我們是最稚氣的組別，研究有關東北角福隆的一處龍門露營度假基地與其未來發展有關的趨勢與策略；我們看出近年來露營活動的熱度再度掀起風潮，選擇東北角的龍門露營地作為我們的研究對象園中腹地廣大擁有多種不同的設施以及服務項目且擁有全國唯一合法經營大型獨木舟基地其地理位置非常優秀靠近火車站且鄰近海水浴場，交通便利，活動多；但卻因氣候關係在冬季不利經營往往淡旺季形成強烈對比為改善其劣勢，本組研究聚焦在其園區可利用的資源以及不足之處提出規劃構想，與實質意見，希望扭轉遊客對冬季東北角的想法。</p>
                            <div className="description-title">
                                <div>
                                    <h4>針對龍門露營區<br />探討未來發展<br />趨勢與策略</h4>
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
            <img src={ B1 } alt="B1" />
            <img src={ B2 } alt="B2" />
            <img src={ B3 } alt="B3" />
            <img src={ B4 } alt="B4" />
            <img src={ B5 } alt="B5" />
            <img src={ B6 } alt="B6" />
            <img src={ B7 } alt="B7" />
            <img src={ B8 } alt="B8" />
            <img src={ B9 } alt="B9" />
            <img src={ B10 } alt="B10" />
            <img src={ B11 } alt="B11" />
            <img src={ B12 } alt="B12" />
            <img src={ B13 } alt="B13" />
            <img src={ B14 } alt="B14" />
            <img src={ B15 } alt="B15" />

        </div>
    )
}

export { WorkB };

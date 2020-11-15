import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import C1 from '../img/work/C-01.svg';
import C2 from '../img/work/C-02.svg';
import C3 from '../img/work/C-03.svg';
import C4 from '../img/work/C-04.svg';
import C5 from '../img/work/C-05.svg';
import C6 from '../img/work/C-06.svg';
import { ReactComponent as C7} from '../img/work/C-07.svg';
import Slider from "react-slick";
import I from '../img/i.png';

import Person1 from '../img/work-personal/C01.jpg';
// import Person2 from '../img/work-personal/C02.jpg';
import Person3 from '../img/work-personal/C03.jpg';
import Person4 from '../img/work-personal/C04.jpg';
import C01 from '../img/work-personal/C1.jpg';
import C02 from '../img/work-personal/C2.jpg';
import C03 from '../img/work-personal/C3.jpg';
import C04 from '../img/work-personal/C4.jpg';


const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    // { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' },
  ];
  const personal = [
    { id: 1, src: C01, name: '林于晴', description: '較不喜歡戶外活動，興趣是宅在家和家人打麻將，單純選錯組＞＜' },
    { id: 2, src: C02, name: '陳子耀', description: '個性害羞內向，但崇尚露營等野外生活。' },
    { id: 3, src: C03, name: '戴妤庭', description: '個性活潑熱情，喜愛出外郊遊，常在休閒時間和朋友相約登山!' },
    { id: 4, src: C04, name: '許傳鈞', description: '個性活潑熱情，喜愛運動，比小戴常在休閒時間和朋友相約登山。' },
  ];

const WorkC = () => {
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
                            <p>會選擇皇帝殿當我們的主題是因為一開始我們就鎖定石碇這個特色區域，想要探討它的自然資源，也和石碇的理事長進行過幾次開會討論。了解了石碇的自然資源，也爬過了幾座山，最後選擇了皇帝殿作為主題，認為他最富有探討的價值，也是大家登山的熱門景點。<br/>
                            小組心得：在過程中發生了許多狀況，不論是快樂的還是驚悚的，當然也包含了不可避免的體力透支，一度有放棄的念頭，還好最後依舊走完所有路線程，完成了奇妙且美好的深度皇帝殿探討之旅。</p>
                            <div className="description-title">
                                <div>
                                    <h4>爬到你鐵腿</h4>
                                    <h4><span>皇帝殿之指標系統</span></h4>
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
            <img src={ C1 } alt="C1" />
            <img src={ C2 } alt="C2" />
            <img src={ C3 } alt="C3" />
            <img src={ C4 } alt="C4" />
            <img src={ C5 } alt="C5" />
            <img src={ C6 } alt="C6" />
            <C7 />
        </div>
    )
}

export { WorkC };
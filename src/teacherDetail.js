import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
// import Carousel from 'react-elastic-carousel'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Teacher1 from './img/teacher1.png';
import Teacher2 from './img/teacher2.png';
import Teacher3 from './img/teacher3.png';
import Teacher4 from './img/teacher4.png';
import Teacher5 from './img/teacher5.png';
import Teacher6 from './img/teacher6.png';
import './teacher.css';


const photos = [
    {
        id: '01',
        Ename: 'WANG, CHENG-PING',
        name: '王正平',
        education: '美國紐約州立大學環境暨森林學院森林系觀光遊憩組博士',
        expertise: '生態觀光、遊憩行為理論、觀光及遊憩規劃',
        src: Teacher1
    },{
        id: '02',
        Ename: 'LIN, CHANG-YU',
        name: '林長郁',
        education: '德國Kaiserslautern工科大學空間與環境規劃學系博士',
        expertise: '觀光地理資訊系統、觀光發展策略與分析、休閒遊憩空間規劃與實務',
        src: Teacher2
    },{
        id: '03',
        Ename: 'CHIEN, PO-HSIU',
        name: '簡博秀',
        education: '國立臺北大學都市計劃研究所博士',
        expertise: '不動產開發、都市及區域規劃、不動產經營與管理',
        src: Teacher3
    },{
        id: '04',
        Ename: 'LIU, SUNG-TA',
        name: '劉松達',
        education: '英國伯明罕大學商學院都市與區域研究博士',
        expertise: '都市觀光、市場研究、地方品牌規劃',
        src: Teacher4
    },{
        id: '05',
        Ename: 'HUANG, SHU-CHUN',
        name: '黃淑君',
        education: '美國德州農工大學景觀建築暨都市計劃博士',
        expertise: '觀光規劃、遊憩環境規劃與設計、休閒暨遊憩心理與行為學',
        src: Teacher5
    },{
        id: '06',
        Ename: 'HUANG,YUEH-WEN',
        name: '黃躍雯',
        education: '國立台灣大學地理所博士',
        expertise: '國家公園、文化觀光、生態與永續旅遊、觀光法規與政策、原民部落與社區觀光',
        src: Teacher6
    }
]
class TeacherDetail extends Component{

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToScroll: 1, 
            className: "slides",
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
            <div className="App">
                <Slider {...settings}>
                {photos.map((photo, key) => {
                    return (
                        <Row className="teacher-row">
                            <Col md="12" sm="12" className="teacher-img">
                                <span className="num">0{ key + 1 }<p className="e-name">{photo.Ename}</p></span>
                                <div className="img"><img src={photo.src} alt={photo.name} /></div>
                            </Col>
                            <Col md="11" sm="11" className="teacher-description">
                                <p className="name">{photo.name}</p>
                                <span className="subject">學歷/{photo.education}</span><br />
                                <span className="subject">專長/{photo.expertise}</span>
                            </Col>
                        </Row>
                    )
                })}
                </Slider>
            </div>
        )
    }
}
export default TeacherDetail;


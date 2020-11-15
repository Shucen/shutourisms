import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import Slider from "react-slick";
import I from '../img/i.png';

import E1 from '../img/work/E-01.svg';
import E2 from '../img/work/E-02.svg';
import E3 from '../img/work/E-03.svg';
import E4 from '../img/work/E-04.svg';
import E5 from '../img/work/E-05.svg';
import E6 from '../img/work/E-06.svg';
import E7 from '../img/work/E-07.svg';
import E8 from '../img/work/E-08.svg';
import E9 from '../img/work/E-09.svg';
import E10 from '../img/work/E-10.svg';
import E11 from '../img/work/E-11.svg';
import E12 from '../img/work/E-12.svg';

import Person1 from '../img/work-personal/E01.jpg';
import Person2 from '../img/work-personal/E02.jpg';
import Person3 from '../img/work-personal/E03.jpg';
import Person4 from '../img/work-personal/E04.jpg';
import Person5 from '../img/work-personal/E05.jpg';
import E01 from '../img/work-personal/E1.jpg';
import E02 from '../img/work-personal/E2.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' },
    { id: 5, src: Person5, title: 'Person5', description: 'Person5' }
  ];
  const personal = [
    { id: 1, src: E01, name: '李騏名', description: '怕麻煩的純種客家人'},
    { id: 2, src: E02, name: '鄭丞妤', description: '討厭氣泡飲料跟巧克力，在文山區長大的永和人'},
  ];

const WorkE = () => {
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
                            <p>我們選擇實習是因為想藉由學校所學的知識，能夠清楚了解業界的運作模式，了解學校所學是得以運用在業界的實務操作。<br/>
                            小組心得：<br/>
                            本次實習學習到了如何幫助業主評估基地的效益，以及對未來基地周圍商圈的看法，也是真正的了解法規的重要性。實習能讓我了解學校所學是能運用在業界的最好認知。</p>
                            <div className="description-title">
                                <div>
                                    <h4>CITY HUNTER</h4>
                                    <h4><span>全國開發建築股份<br/>有限公司</span></h4>
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
            <img src={ E1 } alt="E1" />
            <img src={ E2 } alt="E2" />
            <img src={ E3 } alt="E3" />
            <img src={ E4 } alt="E4" />
            <img src={ E5 } alt="E5" />
            <img src={ E6 } alt="E6" />
            <img src={ E7 } alt="E7" />
            <img src={ E8 } alt="E8" />
            <img src={ E9 } alt="E9" />
            <img src={ E10 } alt="E10" />
            <img src={ E11 } alt="E11" />
            <img src={ E12 } alt="E12" />
        </div>
    )
}

export { WorkE };
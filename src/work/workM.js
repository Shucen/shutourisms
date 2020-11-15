import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Company1 from '../img/company1.png';
import Company2 from '../img/company2.png';
import Design from '../img/design.jpg';
import Spacesetting from '../img/space_setting.jpg';
import Imitation from '../img/imitation.png';
import Imitation2 from '../img/imitation2.jpg';
import Sketch1 from '../img/sketch1.jpg';
import Sketch2 from '../img/sketch2.jpg';
import Sketch3 from '../img/sketch3.jpg';
import Sketch4 from '../img/sketch4.jpg';
import Experience from '../img/experience.jpg';
import I from '../img/i.png';
import Slider from "react-slick";

import Person1 from '../img/work-personal/M1.jpg';
import Person2 from '../img/work-personal/M2.jpg';
import Person3 from '../img/work-personal/M3.jpg';
import Person4 from '../img/work-personal/M4.jpg';
import Person5 from '../img/work-personal/M5.jpg';
import Person6 from '../img/work-personal/M6.jpg';

const images = [
    { id: 1, src: Person1, title: 'Person1', description: 'Person1' },
    { id: 2, src: Person2, title: 'Person2', description: 'Person2' },
    { id: 3, src: Person3, title: 'Person3', description: 'Person3' },
    { id: 4, src: Person4, title: 'Person4', description: 'Person4' },
    { id: 4, src: Person5, title: 'Person5', description: 'Person5' },
    { id: 4, src: Person6, title: 'Person6', description: 'Person6' }
  ];

const WorkM = () => {
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
                                <p>合圃股份有限公司為國內具規模之專業環境規劃設計顧問公司，提供包括綱要計畫、土地開發、市場評估、財務評估、整體規劃、都市設計、景觀建築及工程管理、技術顧問、資材研發等整體性之相關專業服務的公司。</p>
                                <div className="description-title">
                                    <div>
                                        <h4>澎湖觀音亭水岸<br />提升計畫</h4>
                                        <h4><span>合圃股份有限公司</span></h4>
                                    </div>&nbsp;&nbsp;&nbsp;
                                    <img src={ I } alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            <div className="member-section">
                    <Container>
                        <Row>
                            <Col md="6" sm="12" className="content member-content">
                                <Row><p>Members</p><hr /></Row>
                                <p className="member-title">Name &nbsp;&nbsp;
                                    <span className="member-text">陳品齊</span>
                                </p>
                                <p className="member-title">Description</p>
                                <p className="member-text margin-top">生性樂觀，人好相處，人很任性，但不喜歡給人添麻煩。</p>
                                
                            </Col>
                            <Col md="6" sm="12" className="content member-img">
                                <p className="member-title">Review</p>
                                在進公司前給自己做了很多心理建設，怕很多事情不懂，會覺得我很煩天很多麻煩因為什麼都不懂，先前也沒學太多軟體的應用怕會讓同事覺得我很累贅，但所幸進去後同事都很友善也很有耐心的教導我，讓我能慢慢跟上，讓我心裡輕鬆很多，以及本來以為公司員工都會是有一定年紀的，但進去後發現公司員工幾乎都是年紀跟我相仿，可以一起吃飯，休息時間可以一起聊天有話聊，讓我的緊張感又減緩了不少，在業界實習不但會學習到專業的軟體應用的方式外，也會接觸到一些平時公司的庶務，例如:蓋章、寄信等等…，實習過程中也能從中觀察一個公司對事情的處理方式以及在工作溝通上的技巧，不同人之間在合作上需要一定的溝通，才能讓事情事半功倍，在業界實習讓我的眼界以及想法寬廣不少。
                            </Col>
                        </Row>
                    </Container>
                </div>
            <Container>
                    <Row className="about-section">
                        <div className="about-description">
                            <h6 className="title">公司簡介<span className="about-line" /></h6>
                            <p className="about-contact">合圃股份有限公司為國內具規模之專業環境規劃設計顧問公司，提供包括綱要計畫、土地開發、市場評估、財務評估、整體規劃、都市設計、景觀建築及工程管理、技術顧問、資材研發等整體性之相關專業服務的公司。</p>
                        </div>
                        <Table className="about-second">
                            <tbody>
                            <tr>
                                <td><img src={ Company1 } alt="Company1" className="second-img" /><br /></td>
                                <td><img src={ Company2 } alt="Company2" className="second-img" /><br /></td>
                            </tr>
                            <tr>
                                <td>前瞻連江．城鎮之心  <span className="fas fa-caret-up"></span></td>
                                <td>東部車站門戶道路景觀提升  <span className="fas fa-caret-up"></span></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row className="plan-section">
                        <div className="plan-description">
                            <h6 className="title">主題案例介紹-觀音亭水岸空間提升計畫<span className="about-line" /></h6>
                            <p className="plan-contact">計畫緣起：<br />
                                觀音亭地區為馬公市區重要的濱海遊憩空間，同時亦為重要活動如花火節、燈光節的舉辦場地。考量現有的使用需求以及設施狀況，亟待更改善，以提供更完善的公共服務品質。
                            </p>
                            <p className="plan-contact">計畫目標：<br />
                            （一）<br />迎合地區未來整體風貌發展構想的整體性，<br />倡導休閒運動生活為發展為主軸，打造輕質、綠意、活力的海濱遊憩空間。<br />
                            （二）<br />營造空間的主題亮點，強化海濱遊憩廊帶的吸引力與環境潛力。</p>
                        </div>
                        <Table className="plan-second">
                            <tbody>
                            <tr>
                                <td><img src={ Design } alt="Design" className="plan-img1" /><br /></td>
                                <td><img src={ Spacesetting } alt="Spacesetting" className="plan-img2" /><br /></td>
                            </tr>
                            <tr>
                                <td>規劃設計理念<span className="fas fa-caret-up"></span></td>
                                <td>整體空間配置<span className="fas fa-caret-up"></span></td>
                            </tr>
                            </tbody>
                        </Table>
                        <Table className="plan-img">
                            <tbody>
                            <tr>
                                <td><img src={ Imitation } alt="Imitation" className="plan-img3" /><br /></td>
                            </tr>
                            <tr>
                                <td>水岸空間模擬示意圖<span className="fas fa-caret-up"></span></td>
                            </tr>
                            </tbody>
                        </Table>
                        <Table className="plan-img">
                            <tbody>
                                <tr>
                                    <td><img src={ Imitation2 } alt="Imitation2" className="plan-img3" /><br /></td>
                                </tr>
                                <tr>
                                    <td>夕照觀景區模擬示意圖<span className="fas fa-caret-up"></span></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row className="sketch-section">
                        <div>
                            <h6 className="title">示意圖製作方式<span className="about-line" /></h6>
                            <p className="sketch-contact">一張好看的示意圖的產生並不簡單，他需要幾種軟體的配合才能誕生出一張作品。步驟如下:</p>
                        </div>
                        <Table className="sketch-description">
                            <tbody>
                                <tr>
                                    <td>
                                        <h6 className="title">AUTO CAD 二维繪圖、詳細繪製、設計文檔和基本三维設計，能夠繪製線搞，為模型打下基礎。<span className="about-line" /></h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ Sketch1 } alt="Sketch1" className="sketch-img" />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table className="sketch-description">
                            <tbody>
                                <tr>
                                    <td>
                                        <h6 className="title">SKETCHUP-適用於建築、設計、製造的電腦輔助繪圖軟體，產生3D模型<span className="about-line" /></h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ Sketch2 } alt="Sketch2" className="sketch-img" />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table className="sketch-description">
                            <tbody>
                                <tr>
                                    <td>
                                        <h6 className="title">LUMION-3D可視化工具，讓模型增加現場感，賦予生命力<span className="about-line" /></h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ Sketch3 } alt="Sketch3" className="sketch-img" />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table className="sketch-description">
                            <tbody>
                                <tr>
                                    <td>
                                        <h6 className="title">PS編修與繪圖工具，為模擬圖提供畫龍點睛效果<span className="about-line" /></h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ Sketch4 } alt="Sketch4" className="sketch-img" />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row className="experience-section">
                        <p className="experience-contact">在業界實習不但會學習到專業的軟體應用的方式外，也會了解一些案子在進行中在民間遇到的問題
                            ，需要跟民眾溝通，多次跟社區委員會還有政府開會等等繁瑣過程…去實習也會接觸到一些平時公司的庶務，例如:蓋章、寄信
                            等等…，實習過程中也能一窺公司對事情的處理方式以及在工作溝通上的技巧，不同人之間在合作上需要有良好的溝通和共識，
                            才能讓事情事半功倍，在業界實習讓我的眼界以及想法寬廣不少。<span className="about-line" /></p>
                        <img src={ Experience } alt="Experience" className="sketch-img" /><br />
                    </Row>
                </Container>
        </div>
    )
}

export { WorkM };

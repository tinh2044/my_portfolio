import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp2 from '../../assets/img/background/color-sharp2.png';
import './Skill.scss';
import { listSkill, listSkillDetail } from './dataSkill';
import SkillItem from './SkillItem';
import { Col, Row } from 'react-bootstrap';
import SkillDetail from './SkillDetail';
import { useState } from 'react';
import RightButton from './Button/RightButton';
import LeftButton from './Button/LeftButton';

function Skills() {
    const [indexItemDetail, setIndexItemDetail] = useState(0);
    // Set Animation For Skill Detail Component
    const [isLeft, setIsLeft] = useState(0);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1023 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="skill container-fluid" id="skills">
            <div className="container">
                <Row>
                    <Col xs={12}>
                        <div className="skill-bx wow zoomIn ">
                            <h2>Skills</h2>
                            <p>I have learned front end by myself at F8, W3School and on Youtube since June</p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider col col-12"
                                controls={true}
                                customRightArrow={
                                    <RightButton
                                        lenIcon={listSkillDetail.length}
                                        setIndexItemDetail={setIndexItemDetail}
                                        setIsLeft={setIsLeft}
                                    />
                                }
                                customLeftArrow={
                                    <LeftButton
                                        lenIcon={listSkillDetail.length}
                                        setIndexItemDetail={setIndexItemDetail}
                                        setIsLeft={setIsLeft}
                                    />
                                }
                            >
                                {listSkill.map((skill, index) => (
                                    <SkillItem
                                        key={skill.icon}
                                        icon={skill.icon}
                                        present={skill.present}
                                        index={index}
                                        setIndexItemDetail={setIndexItemDetail}
                                        setIsLeft={setIsLeft}
                                    />
                                ))}
                            </Carousel>
                            {listSkillDetail.map((data, index) => (
                                <SkillDetail
                                    isLeft={isLeft}
                                    data={data}
                                    key={index}
                                    isShow={indexItemDetail === index}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    );
}
export default Skills;

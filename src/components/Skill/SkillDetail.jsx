import React from 'react';
import { Col, Row } from 'react-bootstrap';
import 'animate.css';

function SkillDetail({ data }) {
    return (
        <Row className="detail animate__animated animate__fadeInRight d-flex align-items-center justify-content-center">
            <Col xs={4} sm={2} className="icon mb-2">
                {data.icon}
            </Col>
            <Col xs={12} sm={10} className="desc">
                {data.desc.map((item) => (
                    <p key={item}>{`- ${item}`}</p>
                ))}
                <p>- I'm still learning to gain more knowledge and to better</p>
            </Col>
        </Row>
    );
}

export default SkillDetail;

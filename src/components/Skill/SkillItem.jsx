import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import './Skill.scss';
function SkillItem({ icon, present, index, setIndexItemDetail, setIsLeft }) {
    const [effect, setEffect] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setInterval(() => {
                setEffect(true);
                setTimeout(() => {
                    setEffect(false);
                }, 2500);
            }, 5000);
        }, index * 300);
        // return clearInterval(id);
    }, []);

    const handleClick = () => {
        setIndexItemDetail((prev) => {
            setIsLeft(prev > index ? true : false);
            console.log(prev > index);
            return index;
        });
    };
    return (
        <Col xs={12} md={4} lg={4} className="wrapper">
            <div className="main" onClick={handleClick}>
                <div className="body ">
                    <div className="inner">
                        <div className="content">
                            <div className={`icon ${effect ? 'effect' : ''}`}>{icon}</div>
                            <span className={`present ${effect ? 'effect' : ''}`}>{`${present}%`}</span>
                        </div>
                    </div>
                </div>
                <svg
                    style={{ animationDelay: `${index * 100}ms` }}
                    className="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                >
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#AA367C" />
                            <stop offset="100%" stopColor="#4A2FBD" />
                        </linearGradient>
                    </defs>
                    <circle
                        strokeDashoffset={472 - (472 * present) / 100}
                        className="circle"
                        cx="80"
                        cy="80"
                        r="70"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </Col>
    );
}

SkillItem.propTypes = {};

export default React.memo(SkillItem);

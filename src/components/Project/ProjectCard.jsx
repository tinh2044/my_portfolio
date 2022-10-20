import { Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import './Project.scss';

function ProjectCard({ data: { img, desc }, isLeft }) {
    const { technology: listTechnology } = desc;
    return (
        <TrackVisibility>
            {(isVisible) => (
                <Col
                    size={12}
                    className={`${isVisible && 'animate__animated'} animate__fadeIn${isLeft ? 'Left' : 'Right'}`}
                >
                    <Row
                        className="d-xs-flex justify-content-center project-card container shadow p-3"
                        style={{ background: '#151515' }}
                    >
                        <Col xs={10} sm={4} className="proj-img-bx my-auto p-0 project-card">
                            <img src={img.image} alt="" />
                            <div className="proj-tx-tx">
                                <h4>{img.title.toUpperCase()}</h4>
                                <button className="btn-view">
                                    <a href={img.link} target="_blank" rel=" noreferrer">
                                        view
                                    </a>
                                </button>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} className="d-flex flex-column p-0 ps-4 pt-3">
                            <h3 className="text-white d-h3">{desc.name}</h3>
                            <span className="text-white my-1 d-block">
                                Introduce : <span className="text-secondary my-1">{desc.introduce} </span>
                            </span>
                            <span className="text-white my-1 d-block">
                                Time : <span className="text-secondary my-1">{desc.time} </span>
                            </span>
                            <span className="text-white my-1 d-block">
                                Description : <span className="text-secondary my-1">{desc.description} </span>
                            </span>
                            <span className="text-white my-1 d-block">
                                Benefit : <span className="text-secondary my-1">{desc.benefit} </span>
                            </span>
                            <span className="text-white my-1 d-flex align-items-center">
                                <span className="me-2">Technology :</span>
                                {/* Render List Technology */}
                                {listTechnology.map((technology, index) => (
                                    <OverlayTrigger
                                        key={index}
                                        placement="bottom"
                                        overlay={<Tooltip id="tooltip-disabled">{technology.tooltip}</Tooltip>}
                                    >
                                        <a href={technology.link} style={{ display: 'block' }}>
                                            <div
                                                key={index}
                                                className="mx-2"
                                                style={{
                                                    width: '36px',
                                                    height: '36px',
                                                    cursor: 'pointer',
                                                    position: 'relative',
                                                }}
                                            >
                                                {technology.icon}
                                            </div>
                                        </a>
                                    </OverlayTrigger>
                                ))}
                            </span>
                        </Col>
                    </Row>
                </Col>
            )}
        </TrackVisibility>
    );
}
export default ProjectCard;

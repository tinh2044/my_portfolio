import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../../assets/img/background/color-sharp2.png';
import TrackVisibility from 'react-on-screen';
import './Project.scss';
import 'animate.css';
import listProjects from './listProject';
import { useState } from 'react';

function Projects() {
    const [isLeft, setIsLeft] = useState(false);
    const [crrTag, setCrrTag] = useState(1);
    const handleTag = (index) => {
        if (index + 1 > crrTag) {
            console.log(index);
            setIsLeft(false);
        } else {
            setIsLeft(true);
        }
        setCrrTag(index + 1);
    };
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="">
                            <h2>Projects</h2>
                            <p>I make some project after my courses at F8</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav
                                    variant="pills"
                                    className="nav-pills mb-5 justify-content-center align-items-center"
                                    id="pills-tab"
                                >
                                    {listProjects.map((project, index) => (
                                        <Nav.Item key={project.index} onClick={() => handleTag(index)}>
                                            <Nav.Link eventKey={project.index}>{`Tab ${index + 1}`}</Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    {listProjects.map((project) => (
                                        <Tab.Pane key={project.index} eventKey={project.index}>
                                            <Row>
                                                <ProjectCard isLeft={isLeft} data={project} />
                                            </Row>
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    );
}
export default Projects;

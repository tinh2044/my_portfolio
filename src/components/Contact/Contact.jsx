import { useMemo, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../../assets/img/contact.svg';
import './Contact.scss';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import FormContact from './FormContact';

function Contact() {
    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} xs={4} lg={5} className="d-none d-lg-block">
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <img
                                    className={isVisible ? 'animate__animated animate__bounceInLeft' : ''}
                                    src={contactImg}
                                    alt="Contact Us"
                                />
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} xs={12} lg={7}>
                        <FormContact />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Contact;

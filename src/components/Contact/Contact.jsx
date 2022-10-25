import { useMemo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../../assets/img/contact.svg';
import './Contact.scss';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { toast } from 'react-toastify';

function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        toast('Message is seeding!', {
            className: 'toast-message',
            autoClose: 2000,
        });
        setButtonText('Seeding');
        const seedMess = async () => {
            const result = await emailjs.sendForm(
                'service_mqibvjh',
                'template_kwy7mn6',
                form.current,
                'zhNlZsT82rOkMgUpd',
            );

            if (result.status === 200) {
                toast.success('Send Message was success!', {
                    className: 'toast-message',
                    autoClose: 2000,
                });
                setButtonText('Seed');
            } else {
                toast.error('Has error please check your internet!', {
                    className: 'toast-message',
                    autoClose: 2000,
                });
                setButtonText('Seed');
            }
        };
        setFormDetails(formInitialDetails);
        seedMess();
    };
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
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__bounceInRight' : ''}>
                                    <h2>Get In Touch</h2>
                                    <form ref={form} className="form" onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    name="first-name"
                                                    type="text"
                                                    value={formDetails.firstName}
                                                    placeholder="First Name"
                                                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    name="last-name"
                                                    type="text"
                                                    value={formDetails.lastName}
                                                    placeholder="Last Name"
                                                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formDetails.email}
                                                    placeholder="Email Address"
                                                    onChange={(e) => onFormUpdate('email', e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formDetails.phone}
                                                    placeholder="Phone No."
                                                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea
                                                    rows="6"
                                                    name="message"
                                                    value={formDetails.message}
                                                    placeholder="Message"
                                                    onChange={(e) => onFormUpdate('message', e.target.value)}
                                                ></textarea>
                                                <button type="submit">
                                                    <span>{buttonText}</span>
                                                </button>
                                            </Col>
                                            {status.message && (
                                                <Col>
                                                    <p className={status.success === false ? 'danger' : 'success'}>
                                                        {status.message}
                                                    </p>
                                                </Col>
                                            )}
                                        </Row>
                                    </form>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Contact;

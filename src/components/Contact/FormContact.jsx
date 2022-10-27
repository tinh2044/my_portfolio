import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import TrackVisibility from 'react-on-screen';
import { toast } from 'react-toastify';
import { Col, Row } from 'react-bootstrap';
import { Formik } from 'formik';
function FormContact() {
    const [buttonText, setButtonText] = useState('Send');
    const form = useRef();

    const sendEmail = (e) => {
        setButtonText('Seeding');
        console.log('tinh');
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
        if (e) {
            // e.target.preventDefault();
            toast.info('Message is seeding!', {
                className: 'toast-message',
                autoClose: 2000,
            });
            seedMess();
        }
        // setFormDetails(initialValues);
        // buttonText === 'Sending' && seedMess();
    };

    const RenderForm = ({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => {
        return (
            <form ref={form} className="form" onSubmit={handleSubmit}>
                <Row>
                    <Col size={12} sm={6} className="px-1">
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {!!touched.firstName && !!errors.firstName ? (
                            <label className="alert-error" data-invalid={errors.firstName}></label>
                        ) : (
                            <label className="alert-success" data-valid="Your first name is valid"></label>
                        )}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={values.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.lastName && errors.lastName ? (
                            <label className="alert-error" data-invalid={errors.lastName}></label>
                        ) : (
                            <label className="alert-success" data-valid="Your last name is valid"></label>
                        )}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                        <input
                            className="email"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.email && errors.email ? (
                            <label className="alert-error" data-invalid={errors.email}></label>
                        ) : (
                            <label className="alert-success" data-valid="Your email is valid"></label>
                        )}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={values.phone}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.phone && errors.phone ? (
                            <label className="alert-error" data-invalid={errors.phone}></label>
                        ) : (
                            <label className="alert-success" data-valid="Your phone is valid"></label>
                        )}
                    </Col>
                    <Col size={12} className="px-1">
                        <textarea
                            rows="6"
                            name="message"
                            placeholder="Message"
                            value={values.message}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        ></textarea>
                        {touched.message && errors.message ? (
                            <label className="alert-error" data-invalid={errors.message}></label>
                        ) : (
                            <label className="alert-success" data-valid="Message is valid"></label>
                        )}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            onClick={(e) => (isSubmitting ? sendEmail(e) : {})}
                        >
                            <span>{buttonText}</span>
                        </button>
                    </Col>
                </Row>
            </form>
        );
    };
    return (
        <TrackVisibility>
            {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__bounceInRight' : ''}>
                    <h2>Get In Touch</h2>

                    <Formik onSubmit={sendEmail} initialValues={initialValues} validationSchema={checkValue}>
                        {RenderForm}
                    </Formik>
                </div>
            )}
        </TrackVisibility>
    );
}

export default FormContact;
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkValue = yup.object().shape({
    firstName: yup.string().required('Please enter that field'),
    lastName: yup.string().required('Please enter that field'),
    email: yup.string().email().required('Please enter that field'),
    phone: yup
        .string()
        .max(10, 'Phone number is not valid')
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Please enter that field'),
    message: yup.string().required('Please enter your message'),
});

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
};

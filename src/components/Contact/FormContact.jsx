import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import TrackVisibility from 'react-on-screen';
import { toast } from 'react-toastify';
import { Col, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import Label from './Label';
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
                    {/* Field First Name */}
                    <Col size={12} sm={6} className="px-1">
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            value={values.firstName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {/* Handle Error */}
                        {!!touched.firstName && !!errors.firstName ? (
                            <Label text={errors.firstName} className="alert-error" error={true} />
                        ) : (
                            <Label
                                text={values.firstName.length > 0 ? 'Your first name is valid' : ''}
                                className="alert-success"
                                error={false}
                            />
                        )}
                    </Col>
                    {/* Field Last Name */}
                    <Col size={12} sm={6} className="px-1">
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={values.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {/* Handle Error */}
                        {!!touched.lastName && !!errors.lastName ? (
                            <Label text={errors.lastName} className="alert-error" error={true} />
                        ) : (
                            <Label
                                text={values.lastName.length > 0 ? 'Your last name is valid' : ''}
                                className="alert-success"
                                error={false}
                            />
                        )}
                    </Col>
                    {/* Field email */}
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
                        {/* Handle Error */}
                        {!!touched.email && !!errors.email ? (
                            <Label text={errors.email} className="alert-error" error={true} />
                        ) : (
                            <Label
                                text={values.email.length > 0 ? 'Your email is valid' : ''}
                                className="alert-success"
                                error={false}
                            />
                        )}
                    </Col>
                    {/* Field Phone */}
                    <Col size={12} sm={6} className="px-1">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={values.phone}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {/* Handle Error */}
                        {!!touched.phone && !!errors.phone ? (
                            <Label text={errors.phone} className="alert-error" error={true} />
                        ) : (
                            <Label
                                text={values.phone.length > 0 ? 'Your phone is valid' : ''}
                                className="alert-success"
                                error={false}
                            />
                        )}
                    </Col>
                    {/* Field Text */}
                    <Col size={12} className="px-1">
                        <textarea
                            rows="6"
                            name="message"
                            placeholder="Message"
                            value={values.message}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        ></textarea>
                        {/* Handle Error */}
                        {!!touched.message && !!errors.message ? (
                            <Label text={errors.message} className="alert-error" error={true} />
                        ) : (
                            <Label
                                text={values.message.length > 0 ? 'Your message is valid' : ''}
                                className="alert-success"
                                error={false}
                            />
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
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your last name'),
    email: yup.string().email().required('You had forgotten your email'),
    phone: yup
        .string()
        .max(10, 'Phone number has 10 number')
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('You had forgotten your phone'),
    message: yup.string().required('Please give me some things'),
});

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
};

import { useState, useEffect } from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import './NewsLetters.scss';
function Newsletter({ status, message, onValidated }) {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf('@') > -1 &&
            onValidated({
                EMAIL: email,
            });
    };

    const clearFields = () => {
        setEmail('');
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row className="d-flex justify-content-center">
                    <Col xs={12} lg={5} className="d-flex justify-content-center align-items-center">
                        <h3 className="text-center">Subscribe to our Newsletter & Never miss latest updates</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col xs={10} lg={7} className="mt-4 mt-lg-0">
                        <form className="col col-12" onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input
                                    value={email}
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
}
export default Newsletter;

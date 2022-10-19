import { Container, Row, Col } from 'react-bootstrap';
import MailchimpForm from './MailchimpForm';
import headerImg from '../assets/img/header-img.svg';
import facebookIcon from '../assets/img/brand//facebookIcon.svg';
import githubIcon from '../assets/img/brand/githubIcon.svg';
import zaloIcon from '../assets/img/brand/githubIcon.svg';
import instagramIcon from '../assets/img/brand/instagramIcon.svg';
import netlifyIcon from '../assets/img/brand/netlifyIcon.svg';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={headerImg} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon d-flex justify-content-end">
                            <a
                                href="https://www.facebook.com/profile.php?id=100038700891848"
                                target="_blank"
                                rel=" noreferrer"
                            >
                                <img src={facebookIcon} alt="" />
                            </a>
                            <a href="https://github.com/tinh2044" target="_blank" rel=" noreferrer">
                                <img src={githubIcon} alt="" />
                            </a>
                            <a href="https://www.instagram.com/gaytevar/" target="_blank" rel=" noreferrer">
                                <img src={instagramIcon} alt="" />
                            </a>
                            <a href="https://zalo.me/0349072813" target="_blank" rel=" noreferrer">
                                <img src={zaloIcon} alt="" style={{ width: 24, height: 24 }} />
                            </a>
                            <a href="https://app.netlify.com/teams/tinh2044/overview" target="_blank" rel=" noreferrer">
                                <img src={netlifyIcon} alt="" style={{ width: 24, height: 24 }} />
                            </a>
                        </div>
                        <p>
                            <span>Email: </span>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href="mailto:tinhnguyen23122004@gmailcom"> tinhnguyen23122004@gmailcom</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

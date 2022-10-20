import { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import headerImg from '../../assets/img/header.svg';
import facebookIcon from '../../assets/img/brand/facebookIcon.svg';
import githubIcon from '../../assets/img/brand/githubIcon.svg';
import zaloIcon from '../../assets/img/brand/zaloIcon.svg';
import netlifyIcon from '../../assets/img/brand/netlifyIcon.svg';
import instagramIcon from '../../assets/img/brand/instagramIcon.svg';
import { ChevronDoubleLeft } from 'react-bootstrap-icons';
import './Navbar.scss';

const listSocials = [
    {
        icon: facebookIcon,
        link: 'https://www.facebook.com/profile.php?id=100038700891848',
    },
    {
        icon: githubIcon,
        link: 'https://github.com/tinh2044',
    },
    {
        icon: instagramIcon,
        link: 'https://www.instagram.com/gaytevar/',
    },
    {
        icon: zaloIcon,
        link: 'https://zalo.me/0349072813',
    },
    {
        icon: netlifyIcon,
        link: 'https://app.netlify.com/teams/tinh2044/overview',
    },
];
function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [showGroupIcon, setShowGroupIcon] = useState(false);
    const navToggleRef = useRef();
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const handleClickNavLink = (value) => {
        setActiveLink(value);
        if (window.outerWidth < 576) navToggleRef.current.click();
    };
    return (
        <Router>
            <Navbar expand="md" className={scrolled ? 'scrolled' : ''} id="navbar">
                <div className="container">
                    <Navbar.Brand href="#home">
                        <img src={headerImg} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle ref={navToggleRef} aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="#home"
                                className={`navbar-link ${activeLink === 'home' && 'active'}`}
                                onClick={() => handleClickNavLink('home')}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={`navbar-link ${activeLink === 'skills' && 'active'}`}
                                onClick={() => handleClickNavLink('skills')}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={`navbar-link ${activeLink === 'projects' && 'active'}`}
                                onClick={() => handleClickNavLink('projects')}
                            >
                                Projects
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text d-flex ">
                            <button
                                onClick={() => setShowGroupIcon(!showGroupIcon)}
                                className={`rounded-circle btn-icon ${
                                    showGroupIcon && 'rotate'
                                } d-none d-lg-inline-block`}
                            >
                                <ChevronDoubleLeft size={26} />
                            </button>
                            <div className={`social-icon icon-group  ${showGroupIcon && 'show'}`}>
                                {listSocials.map((item) => (
                                    <a key={item.link} href={item.link} target="_blank" rel=" noreferrer">
                                        <img src={item.icon} alt="" />
                                    </a>
                                ))}
                            </div>

                            <HashLink to="#skills">
                                <button className="button">
                                    <span>See Skills</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </Router>
    );
}
export default NavBar;

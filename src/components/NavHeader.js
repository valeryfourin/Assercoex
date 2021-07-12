import React from 'react';
import { Image, Nav, NavLink } from 'react-bootstrap';
import '../styles/NavHeader.scss';
import i18n from '../i18n.js';
import ToTopArrow from './ToTopArrow';

const NavHeader = ({t}) => {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }

    return (
        <Nav className="nav-header" id="top">
            <div className="contact-options-header">
                <a href="mailto:info@assercoex.com">
                    <Image className="contact-img" src="../images/icons/mail.png" alt="mail"/>
                    <span className="contact-text">info@assercoex.com</span>
                </a>
                <a href="tel:+593-98-623-4056">
                <Image className="contact-img" src="../images/icons/phone.png" alt="mail"/>
                    <span className="contact-text">+593 98 623 4056</span>
                </a>
            </div>
            <div className="lang-options-header">
                <NavLink className="lang-link" onClick={() => changeLanguage('ru')}>
                    <Image className="lang-img" src="../images/icons/russia.svg" alt="russian"/>
                </NavLink>
                <NavLink className="lang-link" onClick={() => changeLanguage('en')}>
                    <Image className="lang-img" src="../images/icons/united-states.svg" alt="english"/>
                </NavLink>
            </div>
            <ToTopArrow href="#top"/>
        </Nav>
    );
};

export default NavHeader;
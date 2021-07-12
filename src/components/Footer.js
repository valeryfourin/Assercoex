import React from 'react';
import { Image } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import '../styles/Footer.scss';

import { useTranslation } from 'react-i18next';
import { ABOUT_ROUTE, CATALOG_ROUTE,HOME_ROUTE, POLICY_ROUTE } from '../utils/consts';

const Footer = () => {
    
    const { t } = useTranslation();
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <p>{t('contactUs.text')}</p>
                            <a href="mailto:info@assercoex.com">
                                <Image className="contact-img" src="../images/icons/mail.png" alt="mail"/>
                                <span className="contact-text">info@assercoex.com</span>
                            </a>
                            <br />
                            <a href="tel:+593-98-623-4056">
                                <Image className="contact-img" src="../images/icons/phone.png" alt="mail"/>
                                <span className="contact-text">+593 98 623 4056</span>
                            </a>
                        </div>
                        <div className="col-4">
                            <NavLink className="block-link" to={HOME_ROUTE}>{t('menu.home')}</NavLink>
                            <NavLink className="block-link" to={ABOUT_ROUTE}>{t('menu.about')}</NavLink>
                            <NavLink className="block-link" to={CATALOG_ROUTE}>{t('menu.catalog')}</NavLink>
                            <br />
                            <NavLink className="block-link" to={POLICY_ROUTE}>{t('menu.policy')}</NavLink>
                        </div>
                        <div className="col-4">
                            <p>{t('followSocialMedia.text')}</p>
                            <a href="https://instagram.com/assercoex.flowers?utm_medium=copy_link">
                                <Image className="contact-img" src="../images/icons/instagram.png" alt="instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-4">Assercoex Copyright &#169; 2021 all rights reserved </div>
        </>
    );
};

export default Footer;
import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/home/ContactForm';
import { COMPANY_NAME } from '../utils/consts';

const Contact = () => {
    const { t } = useTranslation();
    document.title = t('menu.contact') + ' - ' + COMPANY_NAME;
    return (
        <section className="wrap">
        <Container className="d-flex flex-column align-items-center">
            <Row>
                <div className="col-lg-5 col-md-12 m-3 d-flex flex-column align-items-center">
                    <Row><h2 className="section-title">{t('contactUs.text')}</h2></Row>
                    <div className="container m-1">
                        <Row><p >{t('contactUs.text1')}</p></Row>
                        <Row><p >{t('contactUs.text2')}</p></Row>
                        <div className="contact-options-header d-flex flex-column">
                            <a href="mailto:info@assercoex.com">
                                <Image className="contact-img" src="../images/icons/mail.png" alt="mail"/>
                                <span className="contact-text">info@assercoex.com</span>
                            </a>
                            <a href="tel:+593-98-623-4056">
                            <Image className="contact-img" src="../images/icons/phone.png" alt="mail"/>
                                <span className="contact-text">+593 98 623 4056 {t('contactUs.Peter')}</span>
                            </a>
                            <a href="tel:593-93-921-1809">
                            <Image className="contact-img" src="../images/icons/phone.png" alt="mail"/>
                                <span className="contact-text">+593 93 921 1809 {t('contactUs.Kate')}</span>
                            </a>
                            <a href="skype:assercoex.compras?chat">
                            <Image className="contact-img" src="../images/icons/skype.png" alt="skype"/>
                                <span className="contact-text">assercoex.compras</span>
                            </a>
                            <a href="https://instagram.com/assercoex.flowers?utm_medium=copy_link">
                            <Image className="contact-img" src="../images/icons/instagram.png" alt="instagram"/>
                                <span className="contact-text">assercoex.flowers</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 m-3 d-flex justify-content-center align-items-center">
                    <ContactForm />
                </div>
            </Row>
        </Container>
    </section>
    );
};

export default Contact;
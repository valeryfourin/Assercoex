import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import "../../styles/about/AboutUsSection.scss"

const AboutUsSection = () => {
    const { t } = useTranslation();
    return (
        <section className="wrap">
        <Container className="d-flex flex-column align-items-center">
            <Row>
                <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <Row><h2 className="section-title">{t('aboutUs.title')}</h2></Row>
                    <div className="about-us-container container">
                        <h4 className="about-us-par-vocative mb-4">{t('aboutUs.dearClients')}</h4>
                        <p className="about-us-par">
                            {t('aboutUs.weAreGlad1')}
                            <strong>{t('aboutUs.weAreGladHighlight')}</strong>
                            {t('aboutUs.weAreGlad2')}
                        </p> 
                        <p className="about-us-par">{t('aboutUs.weProvide')}</p>
                        <p className="about-us-par">
                            {t('aboutUs.inShippingSphere1')}
                            <strong>{t('aboutUs.inShippingSphereHighlight')}</strong>
                            {t('aboutUs.inShippingSphere2')}
                        </p>
                        <p className="about-us-par">{t('aboutUs.mainInstruments')}</p>
                        <p className="about-us-par">
                            {t('aboutUs.weOffer1')}
                            <strong>{t('aboutUs.weOfferHighlight')}</strong>
                            {t('aboutUs.weOffer2')}
                        </p>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center">
                    <Image className="about-us-img" src="./images/general/bouquet.jpg" alt="rose bouquet"/>
                </div>
            </Row>
        </Container>
    </section>
    );
};

export default AboutUsSection;
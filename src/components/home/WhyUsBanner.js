import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import '../../styles/home/WhyUsBanner.scss';
import { useTranslation } from 'react-i18next';

const WhyUsBanner = () => {

    const { t } = useTranslation();
    return (
        <section className="wrap">
            <Container className="d-flex flex-column align-items-center">
                <Row><h2 className="section-title">{t('whyUs.title')}</h2></Row>
                <Row>
                    <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center">
                        <Image className="why-us-img" src="./images/general/pink-rose.jpg" alt="pink rose"/>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <ul>
                            <li className="benefits-list-item">{t('whyUs.reason1')}</li>
                            <li className="benefits-list-item">{t('whyUs.reason2')}</li>
                            <li className="benefits-list-item">{t('whyUs.reason3')}</li>
                            <li className="benefits-list-item">{t('whyUs.reason4')}</li>
                            <li className="benefits-list-item">{t('whyUs.reason5')}</li>
                            <li className="benefits-list-item">{t('whyUs.reason6')}</li>
                            <li className="benefits-list-item">{t('whyUs.reason7')}</li>
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default WhyUsBanner;
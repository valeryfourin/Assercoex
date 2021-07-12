import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ServicesBanner = () => {
    const { t } = useTranslation();
    return ( 
        <section className="wrap">
            <Row><h2 className="section-title">{t('ourServices.title')}</h2></Row>
            <div className="fullwidth-banner" style={{backgroundImage: 'url(../images/general/our-service-banner.jpg)'}}>
                <h3>{t('ourServices.bannerText')}</h3>
            </div>
            
            <Row><p className="section-subtitle">{t('ourServices.subtitle')}</p></Row>

            <Container className="item-wrap">
                <div className="method-item">
                    <Image className="method-icon" src="./images/icons/networking.png" alt="networking"/>
                    <p>{t('ourServices.provider')}</p>
                </div>

                <div className="method-item">
                    <Image className="method-icon" src="./images/icons/analysis.png" alt="analysis"/>
                    <p>{t('ourServices.bestPrice')}</p>
                </div>

                <div className="method-item">
                    <Image className="method-icon" src="./images/icons/proofreading.png" alt="proofreading"/>
                    <p>{t('ourServices.personalApproach')}</p>
                </div>

                <div className="method-item">
                    <Image className="method-icon" src="./images/icons/cooperation.png" alt="cooperation"/>
                    <p>{t('ourServices.standartOrders')}</p>
                </div>

                <div className="method-item">
                    <Image className="method-icon" src="./images/icons/party.png" alt="party"/>
                    <p>{t('ourServices.holidaysOrders')}</p>
                </div>

                <div className="method-item">
                    <Image className="method-icon" src="./images/icons/shipped.png" alt="shipped"/>
                    <p>{t('ourServices.transport')}</p>
                </div>
                
            </Container>
        </section>
    );
};

export default ServicesBanner;
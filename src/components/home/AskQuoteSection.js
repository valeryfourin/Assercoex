import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { FAQ_ROUTE } from '../../utils/consts';

const AskQuoteSection = () => {
    const { t } = useTranslation();
    return (
        <section className="wrap">
            <Container className="item-wrap">
                <Row><h2 className="section-title">{t('quote.title')}</h2></Row>
                <Row className="d-flex justify-content-center">
                    <div className="method-item">
                        <a href="https://wa.me/593986234056">
                            <Image 
                            className="method-icon" 
                            src="./images/icons/whatsapp.png" 
                            alt="whatsapp" 
                            title="WhatsApp: +593 98-623-4056" 
                            />
                        </a>
                    </div>
                    <div className="method-item">
                        <a href="tg://resolve?domain=katenovitska">
                            <Image 
                            className="method-icon" 
                            src="./images/icons/telegram.png" 
                            alt="telegram"
                            title="Telegram"/>
                        </a>
                    </div>
                    <div className="method-item">
                        <a href="viber://chat?number=+593986234056">
                            <Image 
                            className="method-icon" 
                            src="./images/icons/viber.png" 
                            alt="viber"
                            title="Viber: +593 98-623-4056"
                            />
                        </a>
                        
                    </div>
                </Row>
                    <div className="additional-item">
                        <p>{t('moreInfo.text1')}</p>
                        <p>{t('moreInfo.text2')}
                            <NavLink className="active-link" to={FAQ_ROUTE}> FAQ</NavLink>
                        </p>
                        <p>{t('moreInfo.text3')}</p>
                        <p>{t('moreInfo.text4')}</p>
                    </div>
            </Container>
            

        </section>
    );
};

export default AskQuoteSection;
import React from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { CONTACT_ROUTE } from '../../utils/consts';
import Btn from '../Btn';

const MainBanner = () => {
    
    const { t } = useTranslation();
    return (
        <div className="fullwidth-banner" style={{backgroundImage: 'url(../images/general/main-banner.jpg)'}}>
            <Col className="d-flex flex-column align-items-center">
                <h2 className="main-banner-text mt-5">
                    {t('mainBanner.text1')}
                    <br/><span className="section-title">{t('mainBanner.textHighlight')}</span> <br/>
                    {t('mainBanner.text2')}
                </h2>
                <NavLink to={CONTACT_ROUTE}>
                    <Btn text={t('cooperation.text')} className="white" variant="light" type="button"/>
                </NavLink>
            </Col>
            
        </div>
    );
};

export default MainBanner;
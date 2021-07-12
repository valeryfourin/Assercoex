import React from 'react';
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const FlowersSection = () => {
    const { t } = useTranslation();
    return (
        <section className="wrap">
            <Row><h2 className="section-title">{t('flowers.title')}</h2></Row>
            <div className="fullwidth-banner" style={{backgroundImage: 'url(../images/general/flowers-banner.jpg)'}}>
                <p className="text-style">{t('flowers.enum')}</p>
            </div>

            <div className="wrap text-style">
                {/* <h4 className="d-flex flex-column justify-content-center"> */}
                
                <p>_</p>
                <p>
                    {t('flowers.optimal1')}
                    <strong>{t('flowers.optimalHighlight')}</strong>
                    {t('flowers.optimal2')}
                </p>
                <p>_</p>
                <p>
                    {t('flowers.priceQuality')}
                    <strong>{t('flowers.priceQualityHighlight')}</strong>
                </p>
                <p>_</p>
                <p>
                    {t('flowers.bestSort1')}
                    <strong>{t('flowers.bestSortHighlight')}</strong>
                    {t('flowers.bestSort2')}
                </p>
                {/* </h4> */}
            </div>
        </section>
    );
};

export default FlowersSection;
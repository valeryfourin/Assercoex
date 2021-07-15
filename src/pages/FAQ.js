import React from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import DivisionLine from '../components/DivisionLine';
import CardQuestion from '../components/faq/CardQuestion';
import ContactForm from '../components/home/ContactForm';
import { COMPANY_NAME } from '../utils/consts';

const FAQ = () => {
    const { t } = useTranslation();
    document.title = t('menu.faq') + ' - ' + COMPANY_NAME;
    return (
        <section className="wrap" id="faq">
            <Row><h2 className="section-title">{t('faq.title')}</h2></Row>
            <Container className="mb-5 mt-5">
                <Accordion>
                  <CardQuestion question={t('faq.q1')} answer={t('faq.a1')} eventKey='1'/>
                  <CardQuestion question={t('faq.q2')} answer={t('faq.a2')} eventKey='2'/>
                  <CardQuestion question={t('faq.q3')} answer={t('faq.a3')} eventKey='3'/>
                  <CardQuestion question={t('faq.q4')} answer={t('faq.a4')} eventKey='4'/>
                  <CardQuestion question={t('faq.q5')} answer={t('faq.a5')} eventKey='5'/>
                  <CardQuestion question={t('faq.q6')} answer={t('faq.a6')} eventKey='6'/>
                  <CardQuestion question={t('faq.q7')} answer={t('faq.a7')} eventKey='7'/>
                  <CardQuestion question={t('faq.q8')} answer={t('faq.a8')} eventKey='8'/>
                  <CardQuestion question={t('faq.q9')} answer={t('faq.a9')} eventKey='9'/>
                  <CardQuestion question={t('faq.q10')} answer={t('faq.a10')} eventKey='10'/>
                </Accordion>
            </Container>
            
            <DivisionLine />
            <Container className="wrap">
                <Row>
                    <div className="row-subtitle">
                        <p><h4>{t('moreInfo.text1')} {t('moreInfo.text4')}</h4></p>
                    </div>
                </Row>
                <div className="col-lg-6 col-md-6 mb-3 d-flex w-100 align-items-center">
                    <ContactForm className="bg-light"/>
                </div>
            </Container>
        </section>
    );
};

export default FAQ;
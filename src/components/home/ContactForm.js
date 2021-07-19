import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Btn from '../Btn';
import TelInput from '../TellInput';

const ContactForm = (props) => {
    const { t } = useTranslation();
    return (
        <Container className={props.className + " contact-form"}>
            <form 
                className="needs-validation" 
                action="https://formspree.io/f/mbjqayjq" 
                method="POST" 
            >
                <div className={"form-inner " + props.className}>
                    <h2 className="section-subtitle">{t('form.title')}</h2>
                    <input className="form-control" id="validationCustom01" type="text" name="name" placeholder={t('form.name')} required />
                    <input className="form-control" id="validationCustom02" type="email" name="_replyto" placeholder="Email" required />
                    <TelInput />
                    <textarea name="message" id="validationCustom04" className="form-control" placeholder={t('form.msg')} rows="5" required></textarea>
                    <Btn type="submit" className="white" text={t('form.send')} variant="dark"/>
                </div>
            </form>
        </Container>
    );
};

export default ContactForm;
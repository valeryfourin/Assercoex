import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import DivisionLine from '../DivisionLine';
import '../../styles/about/AddHelpSection.scss';
import { NavLink } from 'react-router-dom';
import { CONTACT_ROUTE } from '../../utils/consts';
import Btn from '../Btn';

const AddHelpSection = () => {
    const { t } = useTranslation();

    let sortImgArr = ['./images/icons/rose-1.png', './images/icons/rose-3.png', './images/icons/rose-5.png'],
        providerImgArr = ['./images/icons/man-1.png', './images/icons/woman-3.png', './images/icons/man-2.png'],
        transportImgArr = ['./images/icons/truck-1.png', './images/icons/truck-2.png', './images/icons/truck-3.png']
    let count = 0; 

    function changeImageOnHover(e, arr) {
        e.target.src = arr[count];
        count++;
        if (count >= arr.length) {
            count = 0;
        }
    }

    return (
        <section className="wrap additional-help-section">
            <DivisionLine />
            <Row><h2 className="section-subtitle">{t('helpFind.title')}</h2></Row>

            <Container className="list-wrap">
                <div className="list-card row" id="itemImageChangeContainer">
                    <p className="col-10">{t('helpFind.sort')}</p>
                    <span className="col-2"><Image className=" list-icon icon-1 itemImageChange" id="itemImageChange" onMouseOver={e => changeImageOnHover(e, sortImgArr)} src="./images/icons/rose-1.png" alt="sort"/></span>
                </div>

                <div className="list-card row" id="itemImageChangeContainer">
                    <p className="col-10">{t('helpFind.provider')}</p>
                    <span className="col-2"><Image className="list-icon icon-1 itemImageChange" id="itemImageChange" onMouseOver={e => changeImageOnHover(e, providerImgArr)} src="./images/icons/man-3.png" alt="provide"/></span> 
                </div>

                <div className="list-card row" id="itemImageChangeContainer">
                    <p className="col-10">{t('helpFind.transport')}</p>
                    <span className="col-2"><Image className="list-icon icon-1 itemImageChange" id="itemImageChange" onMouseOver={e => changeImageOnHover(e, transportImgArr)} src="./images/icons/truck-2.png" alt="transport"/></span>
                </div>

                <NavLink to={CONTACT_ROUTE}>
                    <Btn text={t('cooperation.text')} className="crimson" variant="light" type="button"/>
                </NavLink>
                
            </Container>
        </section>
    );
};

export default AddHelpSection;
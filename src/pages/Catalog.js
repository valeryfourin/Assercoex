import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Context } from '../index';
import SortModal from '../components/catalog/SortModal';
import '../styles/catalog/Catalog.scss';
import { COMPANY_NAME } from '../utils/consts';
// import {bicolorSorts} from '../components/catalog/sortsArray'

const Catalog = observer(() => {
    const { t } = useTranslation();
    const {bicolor, cream, green, hotpink} = useContext(Context);
    document.title = t('menu.catalog')  + ' - ' + COMPANY_NAME;

    return (
        <section className="wrap">
            <Row><h2 className="section-title">{t('menu.catalog')}</h2></Row>
           
            <Container className="item-wrap">
                <SortModal text="BICOLOR" img="url(../images/catalog/BICOLOR/MAIN.jpg)" arr={bicolor.bicolorSorts}/>
                <SortModal text="CREAM" img="url(../images/catalog/CREAM/MAIN.jpg)" arr={cream.creamSorts}/>
                <SortModal text="GREEN" img="url(../images/catalog/GREEN/MAIN.jpg)" arr={green.greenSorts}/>
                <SortModal text="HOT PINK" img="url(../images/catalog/HOTPINK/MAIN.jpg)" arr={hotpink.hotpinkSorts}/>

            </Container>
        </section>
    );
});

export default Catalog;
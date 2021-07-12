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
    const {bicolor, cream, green, hotpink, pink, red, lavander, white, yellow, orange, garden, other} = useContext(Context);
    document.title = t('menu.catalog')  + ' - ' + COMPANY_NAME;

    return (
        <section className="wrap">
            <Row><h2 className="section-title">{t('menu.catalog')}</h2></Row>
           
            <Container className="item-wrap">
                <SortModal text="BICOLOR" img="url(../images/catalog/BICOLOR/MAIN.jpg)" arr={bicolor.bicolorSorts}/>
                <SortModal text="RED" img="url(../images/catalog/RED/MAIN.jpg)" arr={red.redSorts}/>
                <SortModal text="ORANGE" img="url(../images/catalog/ORANGE/MAIN.jpg)" arr={orange.orangeSorts}/>
                <SortModal text="YELLOW" img="url(../images/catalog/YELLOW/MAIN.jpg)" arr={yellow.yellowSorts}/>
                <SortModal text="GREEN" img="url(../images/catalog/GREEN/MAIN.jpg)" arr={green.greenSorts}/>
                <SortModal text="WHITE" img="url(../images/catalog/WHITE/MAIN.jpg)" arr={white.whiteSorts}/>
                <SortModal text="CREAM" img="url(../images/catalog/CREAM/MAIN.jpg)" arr={cream.creamSorts}/>
                <SortModal text="PINK" img="url(../images/catalog/PINK/MAIN.jpg)" arr={pink.pinkSorts}/>
                <SortModal text="HOT PINK" img="url(../images/catalog/HOTPINK/MAIN.jpg)" arr={hotpink.hotpinkSorts}/>
                <SortModal text="LAVANDER" img="url(../images/catalog/LAVANDER/MAIN.jpg)" arr={lavander.lavanderSorts}/>
                <SortModal text="GARDEN ROSES" img="url(../images/catalog/GARDENROSES/MAIN.jpg)" arr={garden.gardenSorts}/>
                <SortModal text="OTHERS" img="url(../images/catalog/OTHERS/MAIN.jpg)" arr={other.otherSorts}/>
            </Container>
        </section>
    );
});

export default Catalog;
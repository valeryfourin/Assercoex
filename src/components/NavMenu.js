import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import NavHeader from './NavHeader';
import DivisionLine from './DivisionLine';
import '../styles/NavMenu.scss';
import { useTranslation } from 'react-i18next';
import { ABOUT_ROUTE, CATALOG_ROUTE, CONTACT_ROUTE, FAQ_ROUTE, HOME_ROUTE } from '../utils/consts';

const NavBar = () => {

    const { t } = useTranslation();
    return (
        <>
        <NavHeader />
        <DivisionLine />
            <Navbar className="justify-content-around align-items-center container" expand="lg" >
                <Container>
                    <a href={HOME_ROUTE}>
                        <Image className="logo" src="../images/logo.jpg" alt="logo"/>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        >
                            <NavLink className="indented-link" to={HOME_ROUTE}>{t('menu.home')}</NavLink>
                            <NavLink className="indented-link" to={ABOUT_ROUTE}>{t('menu.about')}</NavLink>
                            <NavLink className="indented-link" to={CATALOG_ROUTE}>{t('menu.catalog')}</NavLink>
                            <NavLink className="indented-link" to={FAQ_ROUTE}>{t('menu.faq')}</NavLink>
                            <NavLink className="indented-link" to={CONTACT_ROUTE}>{t('menu.contact')}</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
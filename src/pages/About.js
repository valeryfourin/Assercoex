import React from 'react';

import AboutUsSection from '../components/about/AboutUsSection';
import FlowersSection from '../components/about/FlowersSection';
import AddHelpSection from '../components/about/AddHelpSection';
import ProductsSection from '../components/about/ProductsSection';
import { useTranslation } from 'react-i18next';
import { COMPANY_NAME } from '../utils/consts';

const About = () => {
    const { t } = useTranslation();
    document.title = t('menu.about') + ' - ' + COMPANY_NAME;
    return (
        <>
            <AboutUsSection />
            <FlowersSection />
            <AddHelpSection />
            <ProductsSection />
        </>
    );
};

export default About;

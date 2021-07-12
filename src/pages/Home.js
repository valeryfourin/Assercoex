import React from 'react';
import '../styles/FullWidthBanner.scss';
import FrontImage from '../components/home/FrontImage';
import MainBanner from '../components/home/MainBanner';
import ReviewsSection from '../components/home/ReviewsSection';
import ServicesBanner from '../components/home/ServicesBanner';
import ShippingSection from '../components/home/ShippingSection';
import SideImage from '../components//home/SideImage';
import WhyUsBanner from '../components/home/WhyUsBanner';
import DivisionLine from '../components/DivisionLine';
import RequestSection from '../components/home/RequestSection';
import AskQuoteSection from '../components/home/AskQuoteSection';
import { COMPANY_NAME } from '../utils/consts';

const Home = () => {
    document.title = COMPANY_NAME;
    return (
        <>
            <MainBanner />
            <FrontImage />
            <WhyUsBanner />
            <ServicesBanner />
            <SideImage />
            <ShippingSection />
            <ReviewsSection />
            <DivisionLine />
            <RequestSection />
            <AskQuoteSection />
        </>
    );
};

export default Home;
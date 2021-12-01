import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutME from './About me section/AboutME';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <AboutME />
            <Footer />
        </div>
    );
};

export default Home;
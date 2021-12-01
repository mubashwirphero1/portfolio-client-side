import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutME from './AboutME/AboutME';
import Banner from './Banner/Banner';
import ContactForm from './ContactForm/ContactForm';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <AboutME />
            <Services />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;
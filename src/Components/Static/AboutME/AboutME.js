import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Introduce from './Introducing/Introduce';
import Projects from './Projects/Projects';

const AboutME = () => {
    return (
        <div>
            <Navigation />
            <Introduce />
            <Projects />
            <Footer />
        </div>
    );
};

export default AboutME;
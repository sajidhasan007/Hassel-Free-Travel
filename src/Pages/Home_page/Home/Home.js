import React from 'react';
import Achievement from '../../Achivement/Achivement';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Events from '../Events/Events';

const Index = () => {
    return (
        <div>
            <Banner></Banner>
            <Events></Events>
            <Achievement></Achievement>
            <Contact></Contact>
        </div>
    );
};

export default Index;
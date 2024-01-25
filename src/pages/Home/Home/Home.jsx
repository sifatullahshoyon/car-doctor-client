import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container mx-auto bg-white'>
            <Banner />
            <About />
            <Services />
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;
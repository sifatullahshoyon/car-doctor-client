import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh - 485px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
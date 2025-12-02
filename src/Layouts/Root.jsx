import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer/Footer';

const Root = () => {
    return (
        <>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Root;
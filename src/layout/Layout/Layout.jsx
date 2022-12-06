import React from 'react';

import Routers from "@routers/Routers/";
import Header from "@layout/Header/";
import Footer from "@layout/Footer/";

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Routers/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
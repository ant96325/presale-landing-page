import { Outlet, useLocation } from "react-router-dom";
import Footer from './footer';
import { useEffect, useState } from "react";
import Header from "./header";

const Layout = () => {
    const {pathname} = useLocation();
    return (
        <div className="flex flex-col justify-between h-screen ">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;
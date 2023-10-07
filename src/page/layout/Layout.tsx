import {FC} from "react";
import {Outlet} from "react-router-dom";
import Navigation from "./navigation/Navigation.tsx";


const Layout:FC = () => {
    return (
        <>
            <Navigation/>
            <Outlet/>
        </>
    );
};

export default Layout;
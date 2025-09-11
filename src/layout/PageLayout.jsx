import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PageLayout = ({state, dispatch}) => {
    return (
        <>
            <Navbar state={state} dispatch={dispatch} />
            <Outlet />
            <Footer/>
        </>
    );
};

export default PageLayout;

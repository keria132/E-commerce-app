import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Subscription from "./Subscription/Subscription"

function Layout(){
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Subscription/>
            <Footer/>
        </>
    )
}

export default Layout;
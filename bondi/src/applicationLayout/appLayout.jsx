import '../css/appLayOut.css';
import { Outlet } from 'react-router-dom';
import AppBar from '../components/appBar';
import SideBar from '../components/sidebar';
import { TiHome } from "react-icons/ti";
import { FaWpexplorer } from "react-icons/fa6";
import { RiMessage3Line } from "react-icons/ri";
import { TbUsersGroup } from "react-icons/tb";
import { MdSaveAlt } from "react-icons/md";
import { RiSettings3Line } from "react-icons/ri";


function AppLayOut() {

    //items in the dashboard container
    const dashBoardData = [
        { name: "Home", key: 1, icon: <TiHome /> },
        { name: "Explore", key: 2, icon: <FaWpexplorer /> },
        { name: "Messages", key: 3, icon: <RiMessage3Line /> },
        { name: "Groups", key: 4, icon: <TbUsersGroup /> },
        { name: "Saved", key: 5, icon: <MdSaveAlt /> },
        { name: "Settings", key: 6, icon: <RiSettings3Line /> }

    ];
    return (
        <div className="application-container">

            <AppBar />
            <SideBar dashBoardData={dashBoardData}/>

            <Outlet />

        </div>
    )
}


export default AppLayOut;
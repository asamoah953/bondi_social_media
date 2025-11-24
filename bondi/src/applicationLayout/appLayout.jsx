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
        { name: "Home", key: 1, icon: <TiHome />, url:'/' },
        { name: "Explore", key: 2, icon: <FaWpexplorer />, url:'/explore' },
        { name: "profile", key: 3, icon: <FaWpexplorer />, url:'/user-profile' },
        { name: "Messages", key: 4, icon: <RiMessage3Line />, url:'/user-messages' },
        { name: "Groups", key: 5, icon: <TbUsersGroup />, url:'/groups' },
        { name: "Saved", key: 6, icon: <MdSaveAlt />, url:'/' },
        { name: "Settings", key: 7, icon: <RiSettings3Line />, url:'/settings' }

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
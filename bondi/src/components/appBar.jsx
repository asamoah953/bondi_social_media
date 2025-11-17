import Logo from "./logo";
import '../css/appBar.css';
import { IoMdNotificationsOutline } from "react-icons/io";
import UserImage from '../assets/clinton.png';
import { CiSearch } from "react-icons/ci";




function AppBar() {
    return (
        <div className="app-bar">

            <div className="logo-container">
                <Logo />

                <div className="search-bar">
                    <CiSearch className="search-icon"/>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                    />

                </div>

                <div className="profile-section">

                    <IoMdNotificationsOutline className="notification-icon"/>
                    <div className="user-image">
                        <img src={UserImage} alt="profile" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AppBar;
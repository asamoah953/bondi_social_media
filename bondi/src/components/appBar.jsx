import Logo from "./logo";
import '../css/appBar.css';
import { IoMdNotificationsOutline } from "react-icons/io";
import UserImage from '../assets/clinton.png';
import { CiSearch } from "react-icons/ci";
import { useState } from "react";




function AppBar() {


    const [image, setImage] = useState(null)

    function handleImagePicker(e) {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));

        setImage(preview)
    }


    return (
        <div className="app-bar">

            <div className="logo-container">
                <Logo />

                <div className="search-bar">
                    <CiSearch className="search-icon" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                    />


                </div>

                <div className="profile-section">

                    <IoMdNotificationsOutline className="notification-icon" />
                    <div className="user-image" onClick={handleImagePicker}>
                        {image && <img src={image} alt="User" />}

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImagePicker}
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AppBar;
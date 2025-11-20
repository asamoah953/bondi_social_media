import '../css/userProfile.css';
import Profile from '../assets/OIP.webp';
import { LuCamera } from "react-icons/lu";
import { HiVideoCamera } from "react-icons/hi2";
import { ImLocation } from "react-icons/im";





function UserProfile() {
    return (

        <div className="profile-container">

            <div className='user-info'>
                <div className='profile-container2'><img src={Profile} alt="profile-image" className='the-image' /></div>
                <div className='user-name'>Austin Bridge</div>
                <div className='at-user'>@autinbri</div>
                <div className='activity-container'>
                    <div className='follows'>123,4434 <br />followers</div>
                    <div className='following'>589 <br /> following</div>
                </div>
            </div>
            <div className='user-detail'>
                <div className='about-container'>
                    <div className='img-container'>
                        <img src={Profile} alt="profile-image" className='the-image2' />
                    </div>
                    <div className='img-name'>
                        <div>
                            Austin Bridge
                        </div>
                        <div className='at-user1'>
                            @austinbri
                        </div>
                    </div>
                </div>
                <div className='nav-container'>
                    <div className='nav'>Posts</div>
                    <div className='nav'>About</div>
                    <div className='nav'>Photos</div>
                    <div className='nav'>Friends</div>
                </div>
                <div className="search-bar3">
                    <input
                        type="text"
                        className="search-input3"
                        placeholder="What's on your mind?"
                    />

                </div>
                <div className='media-icons3'>
                    <LuCamera className='icons1'/>
                    <HiVideoCamera className='icons1'/>
                    <ImLocation className='icons1'/>
                </div>
            </div>

        </div>

    )
}

export default UserProfile;
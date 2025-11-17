import UserImage from '../assets/clinton.png';
import PostMedia from './postmedia';

function UserPostContainer() {
    return (

        <>
            <div className='home'>
            <div className="user-image">
                <img src={UserImage} alt="profile" />
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="What's on your mind"
                />
            </div>
            </div>

            <PostMedia />


        </>


    )
}


export default UserPostContainer;
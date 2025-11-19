import '../css/userHome.css';
import UserPostContainer from '../components/userPostsContainer';
import UserPosts from '../components/userPosts';
import SuggestedFriends from '../components/suggestedFriends';
import Trends from '../components/trends';
import ActiveFriends from '../components/activeFriends';


function UserHome() {
    return (
        <>
            <div className='user-post-container'>

                <UserPostContainer />


            </div>
            <UserPosts />
            <SuggestedFriends />
            <Trends />
            <ActiveFriends />
        </>


    )
}


export default UserHome;
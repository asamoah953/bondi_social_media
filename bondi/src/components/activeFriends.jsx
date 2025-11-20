import '../css/activeFriends.css';
import Fairy from '../assets/fairy.webp';
import Peacock from '../assets/peacock.jpg';
import Bondi from '../assets/bondi_image.webp';


function ActiveFriends(){
    return(
        
        <div className="activeFriends-container">
            <div className='active-friends'>Active Friends</div>

            <div className='friends'>
                <img src={Bondi} alt="active friend" className='user-profile'/>
                <img src={Fairy} alt="active friend"  className='user-profile'/>
                <img src={Peacock} alt="active friend"  className='user-profile'/>
                <img src={Fairy} alt="active friend"  className='user-profile'/>
                <img src={Bondi} alt="active friend"  className='user-profile'/>
                <img src={Peacock} alt="active friend"  className='user-profile'/>
                <img src={Fairy} alt="active friend"  className='user-profile'/>
                <img src={Bondi} alt="active friend"  className='user-profile'/>
            </div>

        </div>
    )
}


export default ActiveFriends;
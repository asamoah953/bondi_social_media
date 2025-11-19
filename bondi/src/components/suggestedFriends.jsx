import '../css/suggestedFriends.css';
import Clinton from '../assets/peacock.jpg';


function SuggestedFriends() {

    let suggestedFriends = [
        {
            key: 1,
            name: "Asamoah Clinton",
            profile: <img src={Clinton} />
        },
        {
            key: 2,
            name: "Edna Donkor",
            profile: <img src={Clinton} />
        },
        {
            key: 3,
            name: "Asamoah Clinton",
            profile: <img src={Clinton} />
        },
        {
            key: 4,
            name: "Asamoah Clinton",
            profile: <img src={Clinton} />
        },
    ]
    return (
        <div className="suggested-friends">
            <div className='suggestions-header'>Friend suggestions</div>
            <div className='suggestions'>
                {suggestedFriends.length > 0 && suggestedFriends.map((suggest) => (
                    <div className='suggested-item' key={suggest.key}>
                        <div className='suggested-user-image'>
                            {suggest.profile}
                        </div>
                        <div className='suggested-user-name'>{suggest.name}</div>
                        <button className='follow-btn'>add</button>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default SuggestedFriends;
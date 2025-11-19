import UserImage from '../assets/clinton.png';
import '../css/userPosts.css';
import BlueFairy from '../assets/bluefairy.jpg';
import Gadget from '../assets/gadget.webp';
import Peacock from '../assets/peacock.jpg';
import Post1 from '../assets/post1.webp';
import Userblog from '../assets/Userblog.webp';
import { CiHeart } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";





function UserPosts() {


    let userPosts = [
        {

            key: 1,
            image: <img src={BlueFairy} />,
            profile: <img src={UserImage} />,
            name: "Clinton"

        },
        {

            key: 2,
            image: <img src={Gadget} />,
            profile: <img src={UserImage} />,
            name: "Clinton"

        },
        {

            key: 3,
            image: <img src={Peacock} />,
            profile: <img src={UserImage} />,
            name: "Clinton"

        },
        {
            key: 4,
            image: <img src={Post1} />,
            profile: <img src={UserImage} />,
            name: "Clinton"

        },
        {
            key: 5,
            image: <img src={Userblog} />,
            profile: <img src={UserImage} />,
            name: "Clinton"

        }
    ]

    return (

        <div className="post-container">
            {userPosts.length > 0 &&
                userPosts.map((post) => (
                    <div className="post-div" key={post.key}>

                        <div className="post-profile">
                            <div className="image-container">
                                {post.profile}
                            </div>

                            <div className="name">{post.name}</div>
                        </div>

                        <div className="post-image">
                            {post.image}
                        </div>
                        <div className='interactive-icons'>
                            <div className='icons'>
                                <CiHeart />
                                <BiMessageRounded />
                            </div>
                            <div>
                                <IoMdShareAlt className='share'/>
                            </div>
                        </div>

                    </div>
                ))}

        </div>






    )

}


export default UserPosts;
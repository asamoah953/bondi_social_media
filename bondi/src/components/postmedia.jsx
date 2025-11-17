import { FaImages } from "react-icons/fa";
import { MdOutlinePlayCircleFilled } from "react-icons/md";



function PostMedia(){
    return(
        <div className="media-container">
            <div className="media-icons">
                <FaImages />
                < MdOutlinePlayCircleFilled/>

            </div>

            <button type="submit" className="post-btn ">Post</button>

        </div>
    )
}


export default PostMedia;
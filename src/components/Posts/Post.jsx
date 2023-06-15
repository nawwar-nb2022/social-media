import { MoreVert, ReplyOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import per from "../../Assets/image/per.jpg"
import "./Posts.scss"
const Post = () => {
    return (
        <div className="postSection">
            <div className="topPostSection">
                <div className="personalInfo">
                    <img src={per} alt="personal"/>
                    <span>username</span>  
                </div>
                <MoreVert/>
            </div>
            <div className="PostContent">
                <div className="PostText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cum!
                </div>
                <div className="postImage">
                    {/* <img src={per} alt=""/> */}
                    <LazyLoadImage effect="blur"
                    alt="test" height="100%" width="100%" src ={per} />
                </div>
            </div>
            <div className="EffectSection">
                <div className="likes">
                    <button className="likeAction effectAction">
                        <ThumbUpAltOutlined/>
                    </button>
                    like count
                </div>  
                <div className="shares">
                    <button className="shareAction effectAction">
                        <ReplyOutlined/>
                    </button>
                    share count
                </div>
            </div>
        </div>
    )
}

export default Post

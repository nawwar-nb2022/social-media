import "./FeedBack.scss"
import Share from "./Share"
import Post from "../Posts/Post"
const FeedBack = () => {
    return (
        <div className="FeedBack">
            <div className="FeedWrapper">
                <Share/>
                <div className="PostMainContainer">
                    <Post/>
                    <Post/>
                    <Post/>
                </div>

            </div>
        </div>
    )
}

export default FeedBack

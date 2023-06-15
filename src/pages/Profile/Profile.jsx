import { useParams } from "react-router"
import "./Profile.scss";
import Post from "../../components/Posts/Post";
import SideBar from "../../components/SideBar/SideBar"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import per from "../../Assets/image/per.jpg"
import Top from "../../components/TopBar/Top";
const Profile = () => {
    const {id} = useParams()
    console.log(id)
    return (

        <>
            <Top/>
        <div className="ProfilePage">
                <SideBar/>
            <div className="informationSection">
                <ProfileInfo/>
                <div className="BodySection">

                    <div className="PostContainer">
                        <Post/>
                        <Post/>
                        <Post/>
                    </div>
                    <div className="follow">
                        <div className="following">
                        <h1>
                            people yuo follow
                        </h1>
                        <ul>
                                <li>
                                    <div className="imageContainer">
                                        <img src={per} alt=""/>
                                    </div>
                                    <div className="userName">
                                        nawwar nabhan
                                    </div>
                                </li>
                                <li>
                                    <div className="imageContainer">
                                        <img src={per} alt=""/>
                                    </div>
                                    <div className="userName">
                                        nawwar nabhan
                                    </div>
                                </li>
                                <li>
                                    <div className="imageContainer">
                                        <img src={per} alt=""/>
                                    </div>
                                    <div className="userName">
                                        nawwar nabhan
                                    </div>
                                </li>
                                <li>
                                    <div className="imageContainer">
                                        <img src={per} alt=""/>
                                    </div>
                                    <div className="userName">
                                        nawwar nabhan
                                    </div>
                                </li>
                        </ul>
                        </div>
                        <div className="followers">
                            <h1>
                                people follow you
                            </h1>
                            <ul>
                                <li>
                                    <div className="imageContainer">
                                        <img src={per} alt=""/>
                                    </div>
                                    <div className="userName">
                                        nawwar nabhan
                                    </div>
                                </li>
                                <li>
                                    <div className="imageContainer">
                                        <img src={per} alt=""/>
                                    </div>
                                    <div className="userName">
                                        nawwar nabhan
                                    </div>
                                </li>
                                <li>
                                    <div className="imageContainer">
                                        <img src={per} alt=""/>
                                    </div>
                                    <div className="userName">
                                        nawwar nabhan
                                    </div>
                                </li>
                                <li>
                                    <div className="imageContainer">
                                        <img src={per} alt=""/>
                                    </div>
                                    <div className="userName">
                                        nawwar nabhan
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Profile

import "./ProfileInfo.scss";
import per from "../../Assets/image/per.jpg"
const ProfileInfo = () => {
    return (
        <div className="profileInfo">
                <div className="cover">
                    <div className="coverPicture">
                        <img src="https://i.pinimg.com/564x/20/05/6b/20056b14fdab2670dcf9c195ee32fafe.jpg" alt=""/>
                    </div>
                    <div className="personalImage">
                        <img src={per} alt=""/>
                    </div>
                </div>
                <div className="information">
                    <div className="userName">
                        nawwar nabhan
                    </div>
                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione culpa quas placeat alias vel aperiam libero magnam nemo dolor repudiandae?
                    </div>
                </div>
        </div>

    )
}

export default ProfileInfo

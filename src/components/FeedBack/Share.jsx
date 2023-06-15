import { PostAdd } from "@mui/icons-material"
import per from "../../Assets/image/per.jpg"
const Share = () => {
    return (
        <div className="shareSection">
           <div className="TopSection">
               <div className="image">
                   <img src={per} alt="" />
               </div>
                <div className="inputSection">
                    <button className="btn-post">what are you think</button>
                    <PostAdd/>
                </div>
           </div>
        </div>
    )
}

export default Share

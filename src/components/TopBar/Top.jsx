import "./Top.scss"
import {Search , Person , Chat , Notifications, ArrowDropDown, ArrowDropUp } from "@mui/icons-material"
import per from "../../Assets/image/per.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"

const Top = () => {
    const [seeIcon  , SetSeeIcon] = useState(false)
    return (
        <div className="TopBar">
            <div className="topBarLeft">
                <Link to="/">
                    <div className="logo">
                        NaceeNook
                    </div>
                </Link>
            </div>
            <div className="topBarCenter">
                        <div className="searchBar">
                            <Search/>
                            <input type="text"
                                name="searchInput"
                                className="searchInput"
                                placeholder="what you want to see"
                              />
                        </div>
            </div>
            <div className="topBarRight">
                <div className="topBarLinks">
                    <Link to="/">
                        <span className="TopBarLink">Home</span>
                    </Link> 
                    <Link to="/">
                        <span className="TopBarLink">Timeline </span>
                    </Link>
                </div>
                       

                    <div className="TopBarIcon">
                        <div className={seeIcon?"show SeeIcon" : "hide SeeIcon" }onClick={()=>{SetSeeIcon(!seeIcon)}}>
                          {seeIcon ?  <ArrowDropUp/> : <ArrowDropDown/> } 
                        </div>
                    
                    <div className="TopBarIconWrapper">

                        <div className="topBarIconItem">
                                <Person/>
                                <span className="TopBarBadge">1</span>
                        </div>
                        <div className="topBarIconItem">
                                <Chat/>
                                <span className="TopBarBadge">1</span>
                        </div>
                        <div className="topBarIconItem">
                                <Notifications/>
                                <span className="TopBarBadge">1</span>
                        </div>
                    </div>
                    </div>
                    <div className="topBarProfilePicture">
                        <Link to="/24234">
                            <img src={per} alt="profile "/>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default Top

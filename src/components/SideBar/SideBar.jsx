import "./SideBar.scss"
import {
     RssFeed ,
     HelpOutline , 
     Event , 
     School , 
     Group,
     Bookmark, 
     Chat,
     WorkOutline
    } from "@mui/icons-material"
import { Link } from "react-router-dom";
import { ChangeTheme } from "../../redux/features/ModeSlice";
import { useDispatch } from "react-redux";



const SideBar = () => {
    const dispatch = useDispatch()
    return (
        <div className="SideBar">
            <div className="sideBarWrapper">
                <ul>
                    <li className="SideBarListItem" title="Feed">
                        <RssFeed />    
                         <span className="SideBarText">Feed</span>   
                    </li>
                    <li className="SideBarListItem" title="Chat">
                        <Chat/>    
                         <span className="SideBarText">Chat</span>   
                    </li>
                    <li className="SideBarListItem" title="Groups">
                        <Group/>    
                         <span className="SideBarText">Groups</span>   
                    </li>
                    <li className="SideBarListItem" title="BookMark">
                        <Bookmark/>    
                         <span className="SideBarText" >Bookmark</span>   
                    </li>
                    <Link to="/CommonQuestion">
                        <li className="SideBarListItem" title=" Question">
                                <HelpOutline/>    
                                <span className="SideBarText">Question</span>   
                        </li>
                    </Link>
                    <li className="SideBarListItem" title="Jobs">
                        <WorkOutline/>    
                         <span className="SideBarText" >Jobs</span>   
                    </li>
                    <li className="SideBarListItem" title="Events">
                        <Event/>    
                         <span className="SideBarText">Events</span>   
                    </li>
                    <li className="SideBarListItem" title="Course">
                        <School/>    
                         <span className="SideBarText">course</span>   
                    </li>
                </ul> 
                <hr/>
                <div className="Setting">
                    <div className="theme">
                        <div className="Light" 
                        title="swap to light mode" 
                        onClick={()=>{dispatch(ChangeTheme("light"))}}
                        ></div>
                        <div className="Dark" 
                        title="swap to dark mode"
                        onClick={()=>{dispatch(ChangeTheme("dark"))}}
                        ></div>
                    </div>
                    <div className="lang">
                        ar
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default SideBar

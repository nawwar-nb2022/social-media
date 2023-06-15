import Lottie from "lottie-web"
import { useEffect, useRef, useState } from "react"
import "./RightBar.scss";
import per from '../../Assets/image/per.jpg'
import {Clear } from "@mui/icons-material"
const RightBar = () => {
    const empty_notification = useRef(null)
    const [data , setData] =useState([ 
        {   id:0,
            userName : "nawwar ",
            action : "fallow you",
            see : "see nawwar acount"
        },
        {   id:1,
            userName : "nawwar",
            action : "send you a message",
            see: "message contain"
        },
        {   id:2,
            userName : "nawwar",
            action : "send you a message",
            see: "message contain"
        },
        {   id:3,
            userName : "nawwar",
            action : "send you a message",
            see: "message contain"
        },
        {   id:4,
            userName : "nawwar",
            action : "send you a message",
            see: "message contain"
        }
]) 
    
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container : empty_notification.current,
            loop : true ,
            autoplay:true , 
            renderer : "svg",
            animationData : require("../../Assets/animation/emptyNotification.json")
        })
        return ()=>{
            instance.destroy()
        }
    },[data])
    const handleNotification =(e , rowId)=>{
                setData(
                    data.filter((dat)=>{
                       return (dat.id !== rowId)
                    })
                )
        }

    return (
        <div className="RightBar">
            <div className="RightBarWrapper">
                <div className="adds">
                        adds container <br/> 
                        noting for now 😃
                </div>
                <div className="notification">
                    {data.length > 0 ?
                    <>
                    {data.map(
                        (d , rowId)=>{
                            return (
                                <div className="notificationBody" key={rowId}>
                                    <div className="clearNot" id={rowId} onClick={(e)=>{handleNotification(e , d.id)}}>
                                         <Clear />
                                    </div>
                                    <div className="userInfo">
                                        <div className="userImage">
                                            <img src={per} alt=""/>
                                        </div>
                                        <div className="userName">
                                            {d.userName}
                                        </div> 
                                    </div>
                                    <div className="action">
                                        {d.action}
                                    </div>
                                    <div className="see">
                                        {d.see}
                                    </div>
                                </div>
                            )
                        }
                    )}
                    </>
                    :   

                    <div className="lottieContainer">
                        <div className="lottie" ref={empty_notification}></div>
                        you don't have any notification for now
                    </div>

                    }
</div>
            </div>
        </div>
    )
}

export default RightBar

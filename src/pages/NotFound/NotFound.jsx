import "./NotFound.scss"
import Lottie from "lottie-web"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
    const fof = useRef(null)
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container : fof.current,
            loop : true,
            autoplay : true,
            renderer : "svg",
            animationData: require ("../../Assets/animation/404.json")
        })
        return ()=>{
            instance.destroy()
        }
    },[])
    return (
        <div className="notFound">
            <div className="text">
                oops this page does not exist
            </div>
            <div className="link">
                <Link to="/"> back Home</Link>
            </div>
            <div className="lottieContainer">
                <div className="lottie" ref={fof}></div>
            </div>
        </div>
    )
}

export default NotFound

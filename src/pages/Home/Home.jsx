import FeedBack from "../../components/FeedBack/FeedBack"
import RightBar from "../../components/RightBar/RightBar"
import SideBar from "../../components/SideBar/SideBar"
import Top from "../../components/TopBar/Top"
import "./Home.scss"
const Home = () => {
    return (
      <>
        <Top/>
        <div className="homeContainer">
          <SideBar/>  
          <FeedBack/>
          <RightBar/>
        </div>
      </>
    )
}

export default Home

import Lottie from "lottie-web"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import "./Login.scss"
const Login = () => {
    const [ loginData , setLogin] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e)=>{
        const name = e.target.name 
        const value = e.target.value 

        setLogin((prev)=>{
            return ({...prev , [name] : value})
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("login function")
    }
    const handleEdit =(e)=>{
        e.preventDefault()
    }
    const login = useRef(null)
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container : login.current,
            renderer: "svg",
            loop : true,
            autoplay :true,
            animationData : require ("../../Assets/animation/login.json")
        })
        return ()=>{
            instance.destroy()
        }
    } ,[])
    return (
        <div className="Login">
            <div className="title">
                NaceeNook
            </div>
            <div className="LoginWrapper">
                <div className="leftSide">
                    <div className="lottieContainer">
                        <div ref={login}> </div>
                    </div>
                </div>
                <div className="FormSide">
                    <form onSubmit={handleSubmit}>
                        <div className="FormContainer">

                            <div className="inputGroup">
                                <label htmlFor="email"> Email :</label>
                                <input required onChange={handleChange} type="email" value={loginData.email} name="email" id="email"/>
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="password"> password :</label>
                                <input required onChange={handleChange} 
                                type="password" value={loginData.password} 
                                name="password" id="password"
                                onCut={handleEdit} onCopy={handleEdit} onPaste={handleEdit}
                                />
                            </div>
                            <button  type="submit" className="submit">
                                Login 
                            </button>
                        </div>
                    </form>
                        <div className="switchToSign">
                            dont have an account <Link to="/Register">sign up</Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Login

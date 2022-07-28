import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import login_img from "./img/login_img.png"
import './Signup.css';




// const Signup  = async ()=>{
//     console.warn(name,email,password,mobile)
//     let result = await fetch('http://localhost:5000/register',{
//         method:'post',
//         body:JSON.stringify({name,email,password,mobile}),
//         headers:{
//             'Content-Type':'application/json'
//         },
//     })

    // result = await result.json()
    // console.warn(result);

   const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const navigate = useNavigate();

    
    // useEffect(()=>{
    //     const user = localStorage.getItem('auth');
    //     if(user)
    //     {
    //         navigate('/')
    //     }
    // })

    const collectData = async () => {
        console.warn(name, email, password, mobile)
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password, mobile }),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        result = await result.json()
        console.warn(result);
        localStorage.setItem("auth", JSON.stringify(result));
        
        navigate("/")
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='text-center'>Signup Form</h1>
                        <form>
                            <div className="register mt-5 mb-3">
                                <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name " />
                                <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                                <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password " />
                                <input className="inputBox" type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile " />
                                {/* <button onClick={collectData} className="fav" type="button">Sign Up</button> */}
                                <button onClick={collectData} className="fav " type="submit">signup</button>
                            </div>
                        </form>
                        </div>

                        <div className='col-md-6'>
                            <img className='login-img' src={login_img}></img>
                        </div>


                    </div>
                </div>
            </div>
       

    )
}

export default Signup
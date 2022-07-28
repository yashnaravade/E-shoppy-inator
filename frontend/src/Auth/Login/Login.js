import React, { useState, useEffect } from 'react'
import login_img from "./img/login_img.png"
import { useNavigate } from 'react-router-dom'
import "./Login.css"


const Login =()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    // useEffect(()=>{
    //     const auth = localStorage.getItem('user');
    //     if(auth){
    //         navigate("/")
    //     }
    // })

    const handleLogin= async()=>{
        console.warn("email,password",email,password)
        let result = await fetch ('http://localhost:5000/login',{
            method : "post",
            body : JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            },
    });
    result = await result.json();
    console.warn(result)
    localStorage.setItem("auth",JSON.stringify(result));
    navigate("/")
    // if(result.name){
    //      localStorage.setItem("user",JSON.stringify(result));
    //      navigate("/")
    // }

    }


// const Login = ()=>{
//      const navigate = useNavigate();
// const [data , setData] = useState({
//     email:"",
//     password:""
// });

// async function  loginsubmit(e){
//     e.preventDefault();
//     if(
//         data.email === "" ||
//         data.password === "" 
//     ){
//         alert("plz fill all the field");
//     }

//     else{
//         await axios
//         .post("http://localhost:5000/login",{
//             email:data.email,
//             password:data.password
//         })
//        .then((res)=>
//        {
//         alert("success").then(
//             (value)=>{
//                 navigate("/");
//             }
//         )
//        })
//     }
// }

return (

    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='login-img' src={login_img}></img>
                </div>
                <div className='col-md-6'>
                    <h1 className='text-center'>Login Form</h1>

                    {/* <form onSubmit={loginsubmit}>
                            <div className='login'>
                                <input type="email" className="inputBox" placeholder="Enter Email" onChange={(e)=>setData({...data,email:e.target.value})} value={data.email}/>
                                <input type="password" className="inputBox" placeholder="Enter Password" onChange={(e)=>setData({...data,password:e.target.value})} value={data.password} />
                                <button  className="fav" type="submit" >Login</button>
                            </div>
                        </form> */}

                    <form>
                        <div className='login'>
                            <input type="text" className="inputBox" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <input type="password" className="inputBox" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            <button onClick={handleLogin} className="fav" type="button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

)
}


export default Login
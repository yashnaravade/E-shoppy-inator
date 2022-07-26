import React from 'react'
import login_img from "./img/login_img.png"

function Signup() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='text-center'>Signup Form</h1>
                        <form>
                            <div className="mb-3">
                            <label for="exampleInputName" className="form-label">Enter Name</label>
                                <input type="username" className="form-control" id="exampleInputName" aria-describedby="Username"></input>
                                <label for="exampleInputNumber" className="form-label">Enter Mobile Number</label>
                                <input type="number" className="form-control" id="exampleInputNumber" aria-describedby="Number"></input>
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"></input>
                            </div>
                            
                            <button type="submit" className="btn btn-primary w-100">Signup</button>
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
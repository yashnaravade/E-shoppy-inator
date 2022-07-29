import React from 'react'
import './Mobile.css'
import { useState } from "react";
import axios from 'axios';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import ImgMobile from "./Image/mobile-man.png"


export default function Mobile() {

    const navigate = useNavigate();

    const [mobile,setMobile] = useState({
        // id:"",
        mobile_Name:"",
        mobile_description:"",
        mobile_url:"",
        mobile_prize:"",
        mobile_quantity:""
    });


    async function mobileSubmit(e) {
        e.preventDefault();
        if (
            // mobile.id === "" ||
            mobile.mobile_Name === "" ||
            mobile.mobile_description === "" ||
            mobile.mobile_url === "" ||
            mobile.mobile_prize === "" ||
            mobile.mobile_quantity === "" 
          ){
            swal("Error", "Please fill all the fields", "error");
          }
            else {
                await axios
                  .post("http://localhost:5000/mobile", {
                    // id: mobile.id,
                    mobile_Name:mobile.mobile_Name,
                    mobile_description:mobile.mobile_description,
                    mobile_url:mobile.mobile_url,
                    mobile_prize:mobile.mobile_prize,
                    mobile_quantity:mobile.mobile_quantity
                  })
                  .then((res) => {
                    swal("Success!", "Mobile Info Added successfully!", "success").then(
                      (value) => {
                        navigate("/mobile");
                      }
                    );
                  })
                  .catch((err) => {
                    console.log(err);
                    swal("Error!", err.message, "warning");
                  });
              }
            }
        //  await axios.post("/add/plant",addplant)
        //  .then(res => {
        //    console.log(res.data);
        //    alert("Plant added successfully");
        //  })
        //  .catch(err => {
        //    console.log(err);
        //    alert("plant added failed");
        //  })
    //     }
    //    }

  return (
      <div className='gradient'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 mt-3'>
            <img src={ImgMobile}></img>
            </div>
            <div className='col-md-6'>
            <div className='mt-2'>
                        <h2 className='card-title text-center'>Add Your Mobile </h2>
                        <form onSubmit={mobileSubmit} >
                            {/* <div className='form-group'>
                                <label className='label_plant'><b>Mobile ID :</b></label>
                                <input type='number' className='form-control' placeholder='Enter Mobile ID'
                                 value={mobile.id} onChange={(e)=>setMobile({...mobile,id:e.target.value})}
                                 required
                                 />
                                </div> */}
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Mobile Name :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Mobile Name'
                                value={mobile.mobile_Name} onChange={(e)=>setMobile({...mobile,mobile_Name:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Mobile Description :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Mobile Description'
                                value={mobile.mobile_description} onChange={(e)=>setMobile({...mobile,mobile_description:e.target.value})}
                                required
                                 />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Mobile Photo URL :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Mobile URL'
                                value={mobile.mobile_url} onChange={(e)=>setMobile({...mobile,mobile_url:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Mobile Prize :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Mobile Prize'
                                value={mobile.mobile_prize} onChange={(e)=>setMobile({...mobile,mobile_prize:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Mobile Quantity :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Mobile Quantity'
                                value={mobile.mobile_quantity} onChange={(e)=>setMobile({...mobile,mobile_quantity:e.target.value})}
                                required
                                />
                                </div>
                                <button type='submit' className='button_plant w-100 mt-4'><b>Add Mobile</b></button>
                        </form>
                        </div>
            </div>
       </div>
    </div>
    </div>
  )
}

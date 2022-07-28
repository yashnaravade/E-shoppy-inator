import React from 'react'
import './Sport.css'
import { useState } from "react";
import axios from 'axios';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import sport from "./sport-sport.png"



export default function Sport() {

    const navigate = useNavigate();

    const [sport,setSport] = useState({
        id:"",
        sport_Name:"",
        sport_description:"",
        sport_url:"",
        sport_prize:"",
        sport_quantity:""
    });


    async function sportSubmit(e) {
        e.preventDefault();
        if (
            sport.id === "" ||
            sport.sport_Name === "" ||
            sport.sport_description === "" ||
            sport.sport_url === "" || 
            sport.sport_prize === "" ||
            sport.sport_quantity === "" 
          ){
            swal("Error", "Please fill all the fields", "error");
          }
            else {
                await axios
                  .post("http://localhost:5000/sport", {
                    id: sport.id,
                    sport_Name:sport.sport_Name,
                    sport_description:sport.sport_description,
                    sport_url:sport.sport_url,
                    sport_prize:sport.sport_prize,
                    sport_quantity:sport.sport_quantity
                  })
                  .then((res) => {
                    swal("Success!", "Book Info Added successfully!", "success").then(
                      (value) => {
                        navigate("/sport");
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
               <img src={sport}/>
            </div>
            <div className='col-md-6'>
            <div className='mt-2'>
                        <h2 className='card-title text-center'>Add Your Sport </h2>
                        <form onSubmit={sportSubmit} >
                            <div className='form-group'>
                                <label className='label_plant'><b>Sport ID :</b></label>
                                <input type='number' className='form-control' placeholder='Enter Sport ID'
                                 value={sport.id} onChange={(e)=>setSport({...sport,id:e.target.value})}
                                 required
                                 />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Sport Name :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Sport Name'
                                value={sport.sport_Name} onChange={(e)=>setSport({...sport,sport_Name:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Sport Description :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Sport Description'
                                value={sport.sport_description} onChange={(e)=>setSport({...sport,sport_description:e.target.value})}
                                required
                                 />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Sport Photo URL :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Sport URL'
                                value={sport.sport_url} onChange={(e)=>setSport({...sport,sport_url:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Sport Prize :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Sport Prize'
                                value={sport.sport_prize} onChange={(e)=>setSport({...sport,sport_prize:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Sport Quantity :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Sport Quantity'
                                value={sport.sport_quantity} onChange={(e)=>setSport({...sport,sport_quantity:e.target.value})}
                                required
                                />
                                </div>
                                <button type='submit' className='button_plant w-100 mt-4'><b>Add Sport</b></button>
                        </form>
                        </div>
            </div>
       </div>
    </div>
    </div>
  )
}
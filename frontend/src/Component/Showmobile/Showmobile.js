import React from 'react'
import "./Showmobile.css"
import axios from 'axios'
import {useState, useEffect} from 'react'
import swal from 'sweetalert'
export default function Showmobile(props) {

//   async function deletePlant(){
    
//     const result = await axios.post('/delete/plant', {
//       id: props.id
//     })
//       swal("Success!", "Plant Deleted successfully!", "success");
//   }
   
  
  return (
  
          /* <div className='col-6 mt-3 p-3'>
            <div className='box-sizing card-border'>
            <img src={props.mobile_url} className='img-sizing' alt='plantimg' /><br/>
            <span>ID :{props.id}</span> <br/>
            <span>MOBILE_NAME :{props.mobile_name}</span> <br/>
            <span> MOBILE_DESCRIPTION :{props.mobile_description}</span> <br/>
            <span>MOBILE_PRIZE :{props.mobile_prize}</span> <br/>
            <span>MOBILE_QUANTITY :{props.mobile_quantity}</span> */
            /* </div>
            <div className='btn-sizing mt-3'>
              <div className='row'>
              <div className='col-md-6'>
            <button className='button_show_plants w-100'><b>Edit</b></button>
            </div>
            <div className='col-md-6'>
            <button type='submit' className='button_show_plant w-100'
            onClick={deletePlant}><b>Delete</b></button>
            </div>
            </div> */
            /* </div>
          </div> */
        /* </div>         */


        <div className="row col-4 mt-3 " >

<div classname="col-md-3">
   <div className='card'>
      <card className='card1'>
      <img src={props.mobile_url} className='img-sizing mt-5' alt='plantimg' /><br/>
            {/* <span >ID :{props.id}</span> <br/> */}
            <h3>{props.mobile_Name}</h3> <br/>
            <span><i class="fa-solid fa-person-chalkboard"></i>  :{props.mobile_description}</span> <br/>
            <span className='quantity mt-2'><b> Quantity</b>   :{props.mobile_quantity}</span> <br/>
           <b>Rating:</b><span className='rating mb-3'> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span><br/>
           <b><span className='mt-3 prize'><i class="fa-solid fa-indian-rupee-sign"></i>  :{props.mobile_prize}</span></b>  <br/>
            <button class="card-btn mb-3 mb-3 mt-3"> <i class="fa-solid fa-cart-shopping"></i> Add to Card !!</button>
      </card>
  </div>
  </div>
  </div>
    
  
  )
}

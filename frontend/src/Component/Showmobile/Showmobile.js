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
            <span >ID :{props.id}</span> <br/>
            <span>MOBILE_NAME :{props.mobile_name}</span> <br/>
            <span> MOBILE_DESCRIPTION :{props.mobile_description}</span> <br/>
            <span>MOBILE_PRIZE :{props.mobile_prize}</span> <br/>
            <span>MOBILE_QUANTITY :{props.mobile_quantity}</span> 
      </card>
  </div>
  </div>
  </div>
    
  
  )
}

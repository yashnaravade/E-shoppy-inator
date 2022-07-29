import React from 'react'
import "./Showsport.css"
import axios from 'axios'
import {useState, useEffect} from 'react'
import swal from 'sweetalert'
export default function Showsport(props) {

  
  return (
  

        <div className="row col-4 mt-3 " >

<div classname="col-md-3">
   <div className='card'>
      <card className='card1'>
      <img src={props.sport_url} className='img-sizing mt-5' alt='plantimg' /><br/>
            <span >ID :{props.id}</span> <br/>
            <span>SPORT_NAME :{props.sport_Name}</span> <br/>
            <span> SPORT_DESCRIPTION :{props.sport_description}</span> <br/>
            <span>SPORT_PRIZE :{props.sport_prize}</span> <br/>
            <span>SPORT_QUANTITY :{props.sport_quantity}</span> 
      </card>
  </div>
  </div>
  </div>
    
  
  )
}
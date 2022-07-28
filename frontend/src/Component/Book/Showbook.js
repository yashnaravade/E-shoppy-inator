import React from 'react'
import "./Showbook.css"
import axios from 'axios'
import {useState, useEffect} from 'react'
import swal from 'sweetalert'
export default function Showbook(props) {

  
  return (
  

        <div className="row col-4 mt-3 " >

<div classname="col-md-3">
   <div className='card'>
      <card className='card1'>
      <img src={props.book_url} className='img-sizing mt-5' alt='plantimg' /><br/>
            <span >ID :{props.id}</span> <br/>
            <span>BOOK_NAME :{props.book_name}</span> <br/>
            <span> BOOK_DESCRIPTION :{props.book_description}</span> <br/>
            <span>BOOK_PRIZE :{props.book_prize}</span> <br/>
            <span>BOOK_QUANTITY :{props.book_quantity}</span> 
      </card>
  </div>
  </div>
  </div>
    
  
  )
}
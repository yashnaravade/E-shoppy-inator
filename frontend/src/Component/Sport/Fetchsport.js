import React from 'react';
import Showsport from './Showsport'
import axios from 'axios';
import {useState, useEffect} from 'react';
import './Fetchsport.css'
import { Link } from 'react-router-dom';

export default function Sport() {

  const [sport, setsport] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/sport').then(res => {
      setsport(res.data);
    })
  })


  return (
       <>
          <div className='abc'>
         <div className='container' >
       <h1 className="text-center card-title">Show Sport</h1>
       <hr/>
       <div className='row'>
         {
           sport.map(sports =><Showsport id={sports.id} sport_Name={sports.sport_Name} sport_description={sports.sport_description}
            sport_url={sports.sport_url} sport_prize={sports.sport_prize} sport_quantity={sports.sport_quantity} />)
         }
         </div>
       </div>
       </div>
    </>
  )
}

import React from 'react';
import Showmobile from '../Showmobile/Showmobile';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './Fetch.css'
import { Link } from 'react-router-dom';

export default function Fetch() {

  const [mobile, setmobile] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/mobile').then(res => {
      setmobile(res.data);
    })
  })


  // useEffect(()=>{
  //   async function fetchdata(){
  //     const response =await axios.get("/get/allplant");
  //       setPlant(response.data.data);
  //   }
  //   fetchdata();
  //   },[])

  return (
       <>
          <div className='abc'>
         <div className='container' >
       <h1 className="text-center card-title">Show Mobiles</h1>
       <hr/>
       <div className='row'>
         {
           mobile.map(mobiles =><Showmobile  mobile_Name={mobiles.mobile_Name} mobile_description={mobiles.mobile_description}
           mobile_url={mobiles.mobile_url} mobile_prize={mobiles.mobile_prize} mobile_quantity={mobiles.mobile_quantity} />)
         }
         </div>
       </div>
       </div>
    </>
  )
}

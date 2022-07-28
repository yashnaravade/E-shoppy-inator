import React from 'react';
import Showbook from './Showbook'
import axios from 'axios';
import {useState, useEffect} from 'react';
import './Fetchbook.css'
import { Link } from 'react-router-dom';

export default function Fetch() {

  const [book, setbook] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/book').then(res => {
      setbook(res.data);
    })
  })


  return (
       <>
          <div className='abc'>
         <div className='container' >
       <h1 className="text-center card-title">Show Books</h1>
       <hr/>
       <div className='row'>
         {
           book.map(books =><Showbook id={books.id} books_name={books.book_name} book_description={books.book_description}
           book_url={books.book_url} book_prize={books.book_prize} book_quantity={books.book_quantity} />)
         }
         </div>
       </div>
       </div>
    </>
  )
}

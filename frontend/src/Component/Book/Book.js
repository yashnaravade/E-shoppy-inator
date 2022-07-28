import React from 'react'
import './Book.css'
import { useState } from "react";
import axios from 'axios';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import book from "./book-girl.png"



export default function Book() {

    const navigate = useNavigate();

    const [book,setBook] = useState({
        id:"",
        book_Name:"",
        book_description:"",
        book_url:"",
        book_prize:"",
        book_quantity:""
    });


    async function bookSubmit(e) {
        e.preventDefault();
        if (
            book.id === "" ||
            book.book_Name === "" ||
            book.book_description === "" ||
            book.book_url === "" || 
            book.book_prize === "" ||
            book.book_quantity === "" 
          ){
            swal("Error", "Please fill all the fields", "error");
          }
            else {
                await axios
                  .post("http://localhost:5000/book", {
                    id: book.id,
                    book_Name:book.book_Name,
                    book_description:book.book_description,
                    book_url:book.book_url,
                    book_prize:book.book_prize,
                    book_quantity:book.book_quantity
                  })
                  .then((res) => {
                    swal("Success!", "Book Info Added successfully!", "success").then(
                      (value) => {
                        navigate("/book");
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
               <img src={book}/>
            </div>
            <div className='col-md-6'>
            <div className='mt-2'>
                        <h2 className='card-title text-center'>Add Your Book </h2>
                        <form onSubmit={bookSubmit} >
                            <div className='form-group'>
                                <label className='label_plant'><b>Book ID :</b></label>
                                <input type='number' className='form-control' placeholder='Enter Book ID'
                                 value={book.id} onChange={(e)=>setBook({...book,id:e.target.value})}
                                 required
                                 />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Book Name :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Book Name'
                                value={book.book_Name} onChange={(e)=>setBook({...book,book_Name:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Book Description :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Book Description'
                                value={book.book_description} onChange={(e)=>setBook({...book,book_description:e.target.value})}
                                required
                                 />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Book Photo URL :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Book URL'
                                value={book.book_url} onChange={(e)=>setBook({...book,book_url:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Book Prize :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Book Prize'
                                value={book.book_prize} onChange={(e)=>setBook({...book,book_prize:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2 label_plant'><b>Book Quantity :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Book Quantity'
                                value={book.book_quantity} onChange={(e)=>setBook({...book,book_quantity:e.target.value})}
                                required
                                />
                                </div>
                                <button type='submit' className='button_plant w-100 mt-4'><b>Add Book</b></button>
                        </form>
                        </div>
            </div>
       </div>
    </div>
    </div>
  )
}
// import React from 'react'
// import './Homepage.css';
// import Baground1 from "./Image/Baground-img-1.jpeg";
// import Baground2 from "./Image/Baground-img-2.jpeg";
// import Baground3 from "./Image/Baground-img-3.jpeg";
// import Baground4 from "./Image/Baground-img-4.jpeg";
// import Computer from "./Image/computer-img.webp";



// function Homepage() {
//   return (
//     <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-inner">
//     <div className="carousel-item active" data-bs-interval="10000">
//       <img src={Baground1} className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item" data-bs-interval="2000">
//       <img src={Baground2} className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src={Baground3} className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src={Baground4} className="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
//   <div>
//     <h1 className='text-center mt-3' > 
//     “I love shopping. There is a little bit of magic found in buying something new. It is instant gratification, a quick fix.”
//     </h1>
//   </div>
// <div className='container mt-5'>
//   <div className='row'>
//   <div className="col-md-4">
//   <img src={Computer} className='image-hover' alt="..."/> 
//   <h3 className='text-center mt-3'> Laptop </h3>
//   </div>

//   <div className="col-md-4">
//   <img src={Computer} className='image-hover' alt="..."/> 
//   <h3 className='text-center mt-3'> Laptop </h3>
//   </div>

//   <div className="col-md-4">
//   <img src={Computer} className='image-hover' alt="..."/> 
//   <h3 className='text-center mt-3'> Laptop </h3>
//   </div>

//   <div className="col-md-4 mt-5">
//   <img src={Computer} className='image-hover' alt="..."/> 
//   <h3 className='text-center mt-3'> Laptop </h3>
//   </div>

//   <div className="col-md-4 mt-5 ">
//   <img src={Computer} className='image-hover' alt="..."/> 
//   <h3 className='text-center mt-3'> Laptop </h3>
//   </div>

//   <div className="col-md-4 mt-5">
//   <img src={Computer} className='image-hover' alt="..."/> 
//   <h3 className='text-center mt-3'> Laptop </h3>
//   </div>
  
//  </div>
// </div>
// </div>
//   )
// }  

// export default Homepage


import React from 'react'
import "./Homepage.css";
import mobile from "./Image/mobile-1.jpeg";
import fasion from "./Image/fasion.jpeg";
import toys from "./Image/toys.jpeg";
import books from "./Image/books.jpeg";
import home from "./Image/homeApp.jpeg";
import sport from "./Image/sport.jpeg";
import grocery from "./Image/Grocery-1.jpeg";
import furniture from "./Image/furniture.jpeg";
import travel from "./Image/travel.jpeg";
import slide1 from "./Image/slideImg-1.jpeg";
import slide2 from "./Image/SlideImg-2.jpeg";
import slide3 from "./Image/slideImg-3.jpeg";
import slide4 from "./Image/slide4.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

import {Link,useNavigate} from 'react-router-dom';

export default function Homepage() {
  return (
    <div>

<nav className="navbar navbar-expand-lg NavBar-Edit  ">
  <div className="container-fluid nav-color ">
    <a className="navbar-brand " href="#"><span className='nav-color'><b> Navbar</b></span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item nav-color">
          <a className="nav-link active" aria-current="page" href="#"><span className='nav-color'>Home</span></a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className='nav-color'> Dropdown</span>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled"><span className='nav-color'><span className='nav-color'>Disabled</span></span></a>
        </li>

        <li className="nav-item">
          {/* <a className="nav-link" href="#"><span className='nav-color'>signup</span></a> */}
          <li><Link className="nav-link" to="/register"><span className='nav-color'>Signup</span></Link> </li>
        </li>

        <li className="nav-item">
        {/* <Link><a className="nav-link" href="#"><span className='nav-color'>Login</span></a></Link> */}
        <li><Link className="nav-link" to="/login"><span className='nav-color'>Login</span></Link> </li>
        </li>

        <li className="nav-item">
        {/* <Link><a className="nav-link" href="#"><span className='nav-color'>Login</span></a></Link> */}
        <li><Link className="nav-link" to="/logout"><span className='nav-color'>Logout</span></Link> </li>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"> <span className='nav-color'>Search</span></button>
      </form>
    </div>
  </div>
</nav>
      
      {/* circle content */}
      <div className="content-container mt-5">
        <div className="container">
          <div className="content-style">

            <p className="mt-2">
              <div className="row">
               <Link to ="/mobile"><img className="img-Center " src={mobile} /></Link> 
              </div>
              <span className="row ms-3">Mobile</span>
             {/* <Link to="/mobile"><span className="row ms-3">Mobile</span></Link> */}
            </p>

            <p className="mt-2">
              <div className="row">
                <img className="img-Center " src={fasion} />
              </div>
              <span className="row ms-3">Fasion</span>
            </p>
            <p className="mt-2">
              <div className="row">
                <img className="img-Center" src={grocery} />
              </div>
              <span className="row ms-3">Grocery</span>
            </p>
            <p className="mt-2">
              <div className="row">
                <img className="img-Center" src={home} />
              </div>
              <span className="row ms-4">Home</span>
            </p>
            <p className="mt-2">
              <div className="row">
                <img className="img-Center" src={furniture} />
              </div>
              <span className="row ms-3">Furniture</span>
            </p>
            <p className="mt-2">
              <div className="row">
                <img className="img-Center" src={books} />
              </div>
              <span className="row ms-4">Books</span>
            </p>
            <p className="mt-2">
              <div className="row">
                <img className="img-Center" src={sport} />
              </div>
              <span className="row ms-4">Sports</span>
            </p>
            <p className="mt-2">
              <div className="row">
                <img className="img-Center " src={toys} />
              </div>
              <span className="row ms-3">Kids Toys</span>
            </p>
            <p className="mt-2">
              <div className="row">
                <img className="img-Center " src={travel} />
              </div>
              <span className="row ms-4">Travel</span>
            </p>
          </div>
        </div>
      </div>
      {/* slider */}
      <div 
          id="carouselExampleIndicators"
          className="carousel slide slide-sizing "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={slide1}
                className="d-block w-100 SlideImg-Sizing"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={slide2}
                className="d-block w-100 SlideImg-Sizing"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={slide4}
                className="d-block w-100 SlideImg-Sizing"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={slide3}
                className="d-block w-100 SlideImg-Sizing"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* hover content top */}
        
      <div className="mt-3 text-center Heading-Top">
        Hurry Up Top Deals Is Waiting For You
      </div>
      <div className="mt-1" style={{ backgroundColor: "#f5f5ef" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="dashboard-card-menu dashboard-card-1">
                <img src={slide2} className="card-Img" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="dashboard-card-menu dashboard-card-1">
                <img src={slide3} className="card-Img" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="dashboard-card-menu dashboard-card-1">
                <img src={slide1} className="card-Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Content-1 */}
      <div className="row">
        <div
          className="col-md-3 text-center heading mt-3"
          style={{ backgroundColor: "#f5f5ef" }}
        >
          <h1 className="Deal-Top-Offers"> Top Offers</h1>
          <button type="button" class="btn btn-primary">
            View All
          </button>
        </div>
        <div className="col-md-9">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide1} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button
                        type="button"
                        className="btn btn-primary btn-Edit"
                      >
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide2} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button type="button" class="btn btn-primary btn-Edit">
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide3} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button type="button" className="btn btn-primary">
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide4} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button
                        type="button"
                        className="btn btn-primary btn-Edit"
                      >
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide1} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button
                        type="button"
                        className="btn btn-primary btn-Edit"
                      >
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide2} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button
                        type="button"
                        className="btn btn-primary btn-Edit"
                      >
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide3} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button
                        type="button"
                        className="btn btn-primary btn-Edit"
                      >
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide4} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button
                        type="button"
                        className="btn btn-primary btn-Edit"
                      >
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide1} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button
                        type="button"
                        className="btn btn-primary btn-Edit"
                      >
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* offer content */}
      <div
        className="mt-3"
        style={{ backgroundColor: "#f5f5ef", padding: "5px" ,width:"100%" }}
      >
        <div className="row ms-2">
          <div className="col-md-3">
            <div
              className="card mt-3 mb-3 card-Item"
              style={{ backgroundColor: "blueviolet", color: "white" }}
            >
              <h2 className="text-center mt-2 " style={{ color: "white" }}>
                UNDER
              </h2>
              <span className="text-center mb-2 rupees-style">₹100</span>
            </div>
          </div>
          <div className="col-md-3 ">
            <div
              className="card mt-3 mb-3 card-Item"
              style={{ backgroundColor: "blueviolet", color: "white" }}
            >
              <h2 className="text-center mt-2 " style={{ color: "white" }}>
                UNDER
              </h2>
              <span className="text-center mb-2 rupees-style">₹200</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card mt-3 mb-3 card-Item"
              style={{ backgroundColor: "blueviolet", color: "white" }}
            >
              <h2 className="text-center mt-2 " style={{ color: "white" }}>
                UNDER
              </h2>
              <span className="text-center mb-2 rupees-style">₹300</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card mt-3 mb-3 card-Item"
              style={{ backgroundColor: "blueviolet", color: "white" }}
            >
              <h2 className="text-center mt-2 " style={{ color: "white" }}>
                UNDER
              </h2>
              <span className="text-center mb-2 rupees-style">₹400</span>
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
      <div
        className="mt-3"
        style={{ backgroundColor: "#f5f5ef", padding: "5px" }}
      >
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <img
                className="Img-Editer box-sizing"
                src={slide2}
                style={{ "border-radius": "20px" }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <img
                className="Img-Editer box-sizing"
                src={slide1}
                style={{ "border-radius": "20px" }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <img
                className="Img-Editer box-sizing"
                src={slide3}
                style={{ "border-radius": "20px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="col-md-3 text-center heading mt-3"
          style={{ backgroundColor: "#f5f5ef" }}
        >
          <h1 className="Deal-Top-Offers"> Dhamaka Offers</h1>
          <button type="button" className="btn btn-primary mt-3">
            View All
          </button>
        </div>
        <div className="col-md-9">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide1} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button type="button" class="btn btn-primary btn-Edit">
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide2} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button type="button" class="btn btn-primary btn-Edit">
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide3} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button type="button" class="btn btn-primary btn-Edit">
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide4} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button type="button" class="btn btn-primary btn-Edit">
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide1} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button type="button" class="btn btn-primary btn-Edit">
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide2} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button type="button" class="btn btn-primary btn-Edit">
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide3} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button type="button" class="btn btn-primary btn-Edit">
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide4} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button type="button" class="btn btn-primary btn-Edit">
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dashboard-card-menu dashboard-cardSlider-1">
                <div className="row card-Edit">
                  <img style={{ "border-radius": "20px" }} src={slide1} />
                </div>
                <div className="row mt-2 Order-Summary">
                  <span>Unit TV</span>
                  <br />
                  <span className="mt-2">₹100</span>
                  <span className="mt-2 mb-3">From SmartShop perfect Home</span>
                  <div className="row m-2">
                    <div className="Button-Edit">
                      <button type="button" class="btn btn-primary btn-Edit">
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div
        className="mt-3"
        style={{ backgroundColor: "#f5f5ef", padding: "5px",width:"100%" }}
      >
        <div className="row ms-2 me-2">
          <div className="col-md-3">
            <div
              className="card mt-3 mb-3 card-Item"
              style={{ backgroundColor: "#e6005c", color: "white" }}
            >
              <h2 className="text-center mt-2 " style={{ color: "white" }}>
                MIN
              </h2>
              <span className="text-center mb-2 rupees-style">70% Off</span>
            </div>
          </div>
          <div className="col-md-3 ">
            <div
              className="card mt-3 mb-3 card-Item"
              style={{ backgroundColor: "#e6005c", color: "white" }}
            >
              <h2 className="text-center mt-2 " style={{ color: "white" }}>
                MIN
              </h2>
              <span className="text-center mb-2 rupees-style">60% off</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card mt-3 mb-3 card-Item"
              style={{ backgroundColor: "#e6005c", color: "white" }}
            >
              <h2 className="text-center mt-2 " style={{ color: "white" }}>
                MIN
              </h2>
              <span className="text-center mb-2 rupees-style">50% off</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card mt-3 mb-3 card-Item"
              style={{ backgroundColor: "#e6005c", color: "white" }}
            >
              <h2 className="text-center mt-2 " style={{ color: "white" }}>
                MIN
              </h2>
              <span className="text-center mb-2 rupees-style">40% off</span>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}



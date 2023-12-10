import React from 'react'
import { images } from '../../../assets/images'
export default function HeroSection() {
  return (
    <>
      <div className="heroSection">
        <div className="container text-white">
          <div className="row hero">
            <div className="col-12 col-md-12 col-lg-7">
              <div className="div-1">
                <h4 className='mt-5' style={{ color: '#005552'}}>Crossing over Boundaries, Associating Care</h4>
                <h1>GLOBAL HEALTHCARE MARKETPLACE</h1>
                <p> Keep your medical history in one secure digital space. Track medications, allergies, and test results for a comprehensive overview of your health journey.</p>
                <div className="button">
                  <div>
                    <button type="button" className="btn btn-outline-primary text-white border-white button1" style={{background:'#005552'}}>BOOK APPOINMENT</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-5">
              <div className="hero-r ">
                <img src={images.heroimg} alt="" />
              </div>
            </div>
            <div className="col" style={{background:'#005552'}}>
              <div className="card button1 mt-sm-5" style={{background:'#005552',color:'white'}}>
                <p>Fine what you need</p>
                <div className="d-flex">

                  <div className="inner-card w-75 d-flex">
                    <div className="search">
                      <label htmlFor="searchBox" className="form-label" style={{color:'#005552'}}>Search doctors or procedures</label>
                      <input type="text" className="form-control text-body-tertiary" id="searchBox" aria-describedby="emailHelp" placeholder='E.g Oncology' />
                    </div>
                    <div className="location">
                      <p className='border-start border-black ps-3' style={{color:'#005552'}}>Location <br /> <span className='text-body-tertiary NewYork'>Pakistan</span></p>
                    </div>
                  </div>
                  <div className="buttn">
                    <button type="button " className="btn btn-primary text-white " style={{background:'#005552'}}>EXPLORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
        </div>
      </div>

    </>
  )
}

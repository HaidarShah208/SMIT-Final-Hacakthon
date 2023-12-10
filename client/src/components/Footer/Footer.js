import React from 'react'
import { images } from '../../assets/images/index'
import { Link } from 'react-router-dom'
export default function Footer() {
    let date = new Date().getFullYear()
    return (
        <>
            <div className="container-fluid" style={{background:'#005552',color:'white'}}>
                <footer className="row flex-wrap-reverse px-5 pt-5 my-5">
                    <div className="col-12 col-md-6 col-gl-6 mb-3">
                        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <img src={images.logo} alt="logo" style={{ width: "10rem" }} />
                        </a>
                        <p className="text-white ">Connect with us on social media</p>
                        <Link to={"/"}><i className="fa-brands fa-facebook" style={{color:'white'}}></i></Link>
                        <Link to={"/"}><i className="fa-brands fa-twitter" style={{color:'white'}}></i></Link>
                        <Link to={"/"}><i className="fa-brands fa-instagram" style={{color:'white'}}></i></Link>
                        <Link to={"/"}><i className="fa-brands fa-linkedin-in" style={{color:'white'}}></i></Link>

                    </div>

                    <div className="d-flex flex-wrap justify-content-between col-12 col-md-6 col-gl-6">
                        <div className="col-12 col-md-2 col-gl-2 mb-3">
                            <h5>MENU</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Service</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Blog</a></li>

                            </ul>
                        </div>

                        <div className="col-12 col-md-2 col-gl-2 mb-3">
                            <h5>CONTACT</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">(+92) 03107580073</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">alhi7896542@gmail.com</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Faisalabad </a></li>

                            </ul>
                        </div>

                        <div className="col-12 col-md-2 col-gl-2 mb-3">
                            <div className="float-lg-end">
                                <h5>SUPPORT</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Contact Us</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </footer>
                <div className="row footer border-top">
                    <div className="col">
                        <p className='text-white'>Copyright © {date} EnvoyHealth. All rights reserved.</p>
                    </div>
                    <div className="col ">
                        <p className='float-end text-white'>Privacy Policy | Terms of Use</p>
                    </div>
                </div>
            </div>
        </>
    )
}

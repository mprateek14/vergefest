import React from 'react'
import "./footer.css"
import "react-bootstrap";
import img1 from '../assets/fpp.png'

export default function Footer() {
  return (
    <div>
      <footer className="footer">
  <div className="footer-left col-md-4 col-sm-12">
    <p className="about1">
      <span> <h5><b>About Verge</b></h5></span> <br/>The first iteration of solely technical fest of SRM University, VERGE is an idea turned reality for SRMites. Loaded with feisty challenges, fun events, workshops, and other attractions, VERGE intends to involve every technically oriented student in some event or the other.
      </p>
    <div className="icons">
      <a href="https://www.facebook.com/Verge-106138270809053/"><i className="fa fa-facebook"></i></a>
      
      <a href="#"><i className="fa fa-linkedin"></i></a>
      
      <a href="https://www.instagram.com/verge.techfest/"><i className="fa fa-instagram"></i></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-12 justify-content-center">

    <div>
      <i className="fa fa-map-marker"></i>
      <p><span> Plot No.39, Rajiv Gandhi Education City,</span> P.S.Rai, Delhi-NCR,<br/>Sonepat, Haryana 131029</p>
    </div>

    <div>
      <i className="fa fa-phone"></i>
      <p> 9541779883</p>
    </div>

    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="#"> info@srmuniversity.ac.in</a></p>
    </div>
    
  </div>
  <div className="footer-right col-md-4 col-sm-12">
    {/*<h2> Company<span> logo</span></h2>*/}

    <a href="#"><img src={img1} height="75px" width="75px" data-aos="flip-left" data-aos-duration="1000"></img></a>

    <p className="menu">
      
      <a href="/comingsoon"> Our Team</a> |
      <a href="/#ecard"> Events</a> |
      <a href="/comingsoon"> Sponsors</a> |
      <a href="#"> Contact</a>
    </p>
    <p className="name"> Verge &copy; 2019</p>
  </div>
  
 
</footer>
<div>
<p className="text-center justify-content-center mp"><b>Edited By - Prateek Madan</b></p>
  
</div>
    </div>
  )
}

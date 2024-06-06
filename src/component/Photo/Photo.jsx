import React, { useState } from 'react';
import "./Photo.css";
import m2 from "../../Images/m2.png";
import m1 from "../../Images/m1.png";
import m4 from "../../Images/m4.png";

const Photo = ({ src, details }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <div className='container1'>
    <div className='m11'>
    <div
      className="photo-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

    <img className='m331' src={m1} alt='RupakImg'/>
    <h4>Rupak Kumar</h4>
    <div className='m441'>
    {isHovered && <div className="photo-details">
    <p>Founder</p>
<p>NIFT Hyderabad </p>
<p>Textile designer </p>
<p>9934932001</p>
<p>rupaknirala@gmail.com </p>
    
        </div>}
    </div>
    </div>
    </div>

    <div className='m22'>
    <div
      className="photo-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <img className='m331' src={m2} alt=''/>
        <h4>Chandan kumar</h4>
        <div className='m441'>
        {isHovered && <div className="photo-details"> 
        <p>Secretary & Engineer</p>
<p>M-tech SGVU Rajasthan</p>
<p>Professor at Gaya college of engineering</p> 
<p>9950200638</p>
<p>ckumarsgvu@gmail.com</p>
     
        </div>}
        </div>
    </div>
    </div>
    <div className='m44'>
    <div
      className="photo-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <img className='m331' src={m4} alt=''/>
        <h4>Akashdeep khalkho</h4>
        <div className='m441'>
        {isHovered && <div className="photo-details">
        <p>Designer</p> 
<p>NIFT Hyderabad </p>
<p>  8008680609</p>
<p> akashdeepgoli@gmail.com </p>
        </div>}
        </div>
    </div>
    </div>
    </div>
    
  
  );
};

export default Photo;

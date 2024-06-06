import React, {useRef} from 'react'
import "./Region.css";
import emailjs from '@emailjs/browser';
import Map from '../Map/Map';

const Region = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5h9u86r', 'template_f5wyfuq', form.current, '2fUAJ1ViNgePPvC2j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div>
    <div className="login">
    <div className="loginContainer">
      <form ref={form} onSubmit={sendEmail} className="loginForm">
          <div className="top12">
          <p>CON<span className="IN">TACT US</span></p>
          </div>
          <div>
          <input
           type="Name"
           placeholder="Name"
           required
           
          />
          <input
          type="Email"
          placeholder="Email"
          required
    
          />
          <div className='pop'>
            <div className='sub'>
           <input
          type="Subject"
          placeholder="Subject"
          required
          />
          </div>
          <div className='mess'>
           <textarea name='message' placeholder='Message' cols={30} rows={10}></textarea>
           </div>
           </div>
           <button type="submit">Send Message</button>
          
        </div>
      </form>
    </div>
    </div>
    <div className='mappi'>
      <Map/>
    </div>
  </div>
);
};


export default Region

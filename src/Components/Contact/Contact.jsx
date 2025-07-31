import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "63012578-07db-42e4-be44-a945e1465894");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm always excited to connect, collaborate, or just have a good chat</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>srithichatterjee@gmail.com</p>

            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>9866439324</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor=''>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor=''>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor=''>Your Message</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

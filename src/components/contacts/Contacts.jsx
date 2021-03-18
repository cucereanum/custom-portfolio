import React from 'react'
import Video from '../Video';
import './Contacts.css';

import emailjs from 'emailjs-com';


function Contacts() {


    
 function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fqok3b4', 'template_1eh7n9f', e.target, 'user_eBEl5KvOMoVzgZZNGDS62')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

    return (
        <>
            <Video />
             <form   className="contact-form container-contact" onSubmit={sendEmail}>
                 <h2 data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0"  className="contact-header">Contact Me</h2>
      <input data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0"  className="contact-input" type="hidden" name="contact_number"  />
      <label data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0"   className="contact-label">Name</label>
      <input data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"  className="contact-input" type="text" name="user_name" />
      <label data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className="contact-label">Your Email</label>
      <input data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0"  className="contact-input" type="email" name="user_email" />
      <label  data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0" className="contact-label">Message</label>
      <textarea data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="500"
     data-aos-offset="0"  className="contact-message" name="message" />
        <button data-aos="fade-up"
     data-aos-easing="ease-in-back"
     data-aos-delay="500"
     data-aos-offset="0"  className="contact-button" type="submit">Send</button>
    </form>
        </>
    )
}

export default Contacts

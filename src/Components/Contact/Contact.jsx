import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/assets/mail_icon.svg';
import location_icon from '../../assets/assets/location_icon.svg';
import call_icon from '../../assets/assets/call_icon.svg';

const Contact=()=>{
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f0853d4b-eca1-43ec-bb15-a9220429760e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    
    return(
        <div id="contact" className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <p>I'm currently available to join in your organization.</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt=''/> <p>vishnupakanati18@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={call_icon} alt=''/> <p>+91 7207537549</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={location_icon} alt='' /><p>Ongole, Andhra pradesh</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name'/>
                    <label htmlFor=''>Your Email</label>
                    <input type="email" placeholder='Enter your email address' name='email'/>
                    <label htmlFor=''>write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>

        </div>

    );
}

export default Contact;

import React from 'react'
import '../Styles/Contact.css'
const Contact = () => {
  return (
    <>
       <div className="product-section">
        <img src="https://images.pexels.com/photos/18365319/pexels-photo-18365319/free-photo-of-man-hands-tying-bags.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="about-text">Contact Us</div>
  </div>

  <div className="contact-us-container">
     
      <div className="form-section">
        <h1>Contact us</h1>
        <h3 className="get-in-touch">Get in touch</h3>
        <form className="contact-form">
          <input 
            type="text" 
            placeholder="Name" 
            className="form-input" 
            required 
          />
          <input 
            type="email" 
            placeholder="E-Mail" 
            className="form-input" 
            required 
          />
          <input 
            type="text" 
            placeholder="Website" 
            className="form-input" 
          />
          <textarea 
            placeholder="Message" 
            rows="5" 
            className="form-textarea" 
            required 
          />
          <button 
            type="submit" 
            className="form-button"
          >
            Submit
          </button>
        </form>
      </div>

      
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.746422578917!2d73.1869950753351!3d22.24969797972295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc42c4284fc63%3A0xce07c1e62e46682d!2sMeena%20Plastics!5e0!3m2!1sen!2sin!4v1734597416931!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Meena Plastics Location"
        ></iframe>
      </div>
    </div>

    <div className="contact-info-container">
      <div className="info-card">
        <div className="icon">
          <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="email-icon" />
        </div>
        <h3>EMAIL:</h3>
        <p>Meenaplastics882@gmail.com</p>
        <p>Yashkukreja1309@gmail.com</p>
      </div>

      <div className="info-card">
        <div className="icon">
          <img src="https://cdn-icons-png.flaticon.com/512/159/159832.png" alt="phone-icon" />
        </div>
        <h3>PHONE:</h3>
        <p>+91 94083 42280</p>
      </div>

      <div className="info-card">
        <div className="icon">
          <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="address-icon" />
        </div>
        <h3>ADDRESS:</h3>
        <p>Meena plastics, 882/5 Makarpura</p>
        <p>GIDC Industrial estate,</p>
        <p>Vadodara-390010</p>
      </div>
    </div>
    </>
  )
}

export default Contact;
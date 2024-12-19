import React from 'react'
import "../Styles/About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>
    <div className="about-section">
      <img className="about-img" src="https://t3.ftcdn.net/jpg/08/37/97/34/240_F_837973485_6h9lDXCRmIbP22lRBeXt5GAsgc9Nhn1q.jpg" alt="" />
      <div className="about-text">About Us</div>
    </div>
    <div className='about-content'>
      <div className='about-left'>
      <h2>WHO WE ARE</h2>
      <p>We are Meena Plastics, a business with ISO 9001/2015 certification. We are well-known and reputable for providing the highest quality carry bags, roll garbage bags, bio-hazardous bags, and other products. Our ability to consistently outperform the competition in satisfying customer needs in a way that benefits both parties has earned us respect and trust in this business. We introduce ourselves with great pride because we demonstrate that customers make the best choices if they believe us. From Vadodara, we satisfy the needs of our customers and consistently fulfill our delivery commitments.</p>
      </div>
      <div className='about-right'>
        <img src="https://meenaplastics.com/wp-content/uploads/2023/05/Set-with-different-trash-bags-full-of-garbage-on-white-background_-Banner-design.jpg" alt="" />
      </div>
    </div>
    <div className='about-content-two'>
      
        <img src="https://meenaplastics.com/wp-content/uploads/2023/03/13-scaled-1024x1160.jpg" alt=""/>
      <div className='right-content'>
        <h2>OUR MISSION</h2>
        <p>Our wide selection of high-quality goods has helped us build a sizable clientele. We are renowned in the business for providing top-notch products at competitive prices.</p>
        <div className='lists'>
          <ul>
            <li><FontAwesomeIcon icon={faCheck} className='check-icon' />Reasonable and Affordable Rates</li>
            <li><FontAwesomeIcon icon={faCheck} className='check-icon' />Prompt Order Delivery</li>
            <li><FontAwesomeIcon icon={faCheck} className='check-icon' />Client Satisfaction</li>
            <li><FontAwesomeIcon icon={faCheck} className='check-icon' />Ethical Business</li>
            <li><FontAwesomeIcon icon={faCheck} className='check-icon' />Versatile Payment Methods</li>
            <li><FontAwesomeIcon icon={faCheck} className='check-icon' />Enormous Distribution Network</li>
            <li><FontAwesomeIcon icon={faCheck} className='check-icon' />Follows a Customized Approach</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
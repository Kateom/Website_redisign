import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {

  const services = [
    { id: 1, title: "Industrial", icon: "🏭" },
    { id: 2, title: "Hotel", icon: "🏨" },
    { id: 3, title: "Healthcare", icon: "❤️" },
    { id: 4, title: "Retail", icon: "💼" },
    { id: 5, title: "Agriculture", icon: "🌱" },
    { id: 6, title: "Food", icon: "🍽️" },
  ];

  return (
    <>
      <div className="section-container">
        <div className="content">
          <h1>
            THE BEST <br />
            PLASTIC PRODUCTS <br />
            IN <span className="highlight">WORLD</span>
          </h1>
         <Link to='/about' className="read-more-btn">Read More</Link>
          <div className="social-icons">
            <a href="#facebook" className="icon facebook">
              F
            </a>
            <a href="#youtube" className="icon youtube">
              Y
            </a>
            <a href="#whatsapp" className="icon whatsapp">
              W
            </a>
            <a href="#instagram" className="icon instagram">
              I
            </a>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://images.pexels.com/photos/18365319/pexels-photo-18365319/free-photo-of-man-hands-tying-bags.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Plastic Products Globe"
            className="globe-image"
          />
        </div>
      </div>
      <div className="home-content-aboutus">
        <div className="left">
        <h1>About Us</h1>
        <span className="tag-line">Discover our story</span>

        <p>
          We are Meena Plastics, a business with ISO 9001/2015 certification. We
          are well-known and reputable for providing the highest quality carry
          bags, roll garbage bags, bio-hazardous bags, and other products. Our
          ability to consistently outperform the competition in satisfying
          customer needs in a way that benefits both parties has earned us
          respect and trust in this business. We introduce ourselves with great
          pride because we demonstrate that customers make the best choices if
          they believe us. From Vadodara, we satisfy the needs of our customers
          and consistently fulfill our delivery commitments.
        </p>
      </div>
      <div className="right">
        <div>
        <img className = "first-img" src="https://meenaplastics.com/wp-content/uploads/elementor/thumbs/Untitled-design-11-q2v1qvn07crh7el0q61km90kro4lhfyi2qtsc9pgzo.png" alt="" />
        </div>
        <div className="second-img"><img src="https://meenaplastics.com/wp-content/uploads/elementor/thumbs/Plasticplace-32-Gallon-Totera%C2%AE-Compatible-Trash-Bags-50-Bags-On-Rolls-q5tg6nbjp2vhaizju7h33oh7g8b2jt05a74sd188tc.jpg" alt="" /></div>
      </div>
      </div>

      <section className="services-section">
      <h2 className="section-title">Services & Solutions We Offer</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon-circle">
              <span className="service-icon">{service.icon}</span>
            </div>
            <p className="service-title">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Home;

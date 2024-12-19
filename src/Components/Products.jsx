import React from 'react'
import "../Styles/Product.css"
import { NavLink } from 'react-router-dom'
const Products = () => {
  return (
    <>
      <div className="product-section">
        <img src="https://images.pexels.com/photos/18365319/pexels-photo-18365319/free-photo-of-man-hands-tying-bags.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="about-text">Products</div>
        <div className='product-content'>
          <div className="product-left-section">
            <img src="https://meenaplastics.com/wp-content/uploads/2023/03/Untitled-design-12-1024x768.png" alt="" />
            <div className='products'>
           <img src="https://meenaplastics.com/wp-content/uploads/2023/03/4-300x300.png" alt="" />
            <img src="https://meenaplastics.com/wp-content/uploads/2023/05/AdobeStock_502413354_Preview-300x300.jpeg" alt=""  />
            <img src="https://meenaplastics.com/wp-content/uploads/2023/05/7853f688-38ed-4718-a4c9-22a1f90b0208-300x300.jpg" alt="" />
            </div>
          </div>
          <div className='product-right-section'>
            <h3>Garbage Bag (Disposable)</h3>
            <div className='product-right-content'>
              <p>Product Specifications:</p>
              <ul className='right-list'>
                <li>Available in all microns and material</li>
                <li><span>Pack Size:</span> Box pkg & Piece pkg</li>
                <li><span>Minimum Order:</span> 50 kg</li>
              </ul>
            </div>
            <div className='product-right-content'>
            <p>Product Description:</p>
              <ul className='right-list'>
                <li>Superior quality Garbage Bag with high strength, durability & smooth finish.</li>
                <li>Widely use for kitchen dry waste and wet waste.</li>
                <li>Eco-friendly and tear-resistant.</li>
                <li>Bag Dimensions/Size: As per need.</li>
              </ul>
            </div>
            <div className='product-right-content'>
            <p>Product Description:</p>
              <ul className='right-list'>
                <li>Superior quality Garbage Bag with high strength, durability & smooth finish.</li>
                <li>Widely use for kitchen dry waste and wet waste.</li>
                <li>Eco-friendly and tear-resistant.</li>
                <li>Bag Dimensions/Size: As per need.</li>
              </ul>
            </div>
            <div className="contact-now-btn">
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
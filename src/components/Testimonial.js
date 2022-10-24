import React from 'react';
import "./Testimonial.css";

function Testimonial() {
    return (
      <>
        <div className="testimony">
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>

          <h2>Modern look & trending design</h2>

          <p>
            Get working experience to work with this amazing team & in future
            want to work together for bright future projects and also make
            deposit to freelancer.
          </p>

          <div className="user-profile">
            <div>
              <img src="./images/p1.png" />
            </div>

            <div className='user-name'>
              <h2>Denny Hilgusto</h2>
              <label>@denny.hil</label>
            </div>
          </div>
        </div>
      </>
    );
}

export default Testimonial;
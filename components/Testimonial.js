import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Testimonial() {
  return (
    <section className="testimonial pb-0">
      <div className="container container-custom">
        <div className="col-md-12">
          <div className="heading-style1">
            <span>Testimonials</span>
            <h2>What Our Clients Say</h2>
          </div>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            emulateTouch={true}
            centerMode={true}
            centerSlidePercentage={50}
          >
            <div className="testimonial-wrap">
              <img src="images/testi-img1.jpg" className="img-fluid testi-img-icon" alt="#" />
              <ul>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
              </ul>
              <p><span>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation.
              </p>
              <span className="testi-name">Mary Jane (ceo)</span>
              <div className="testi-styled-bg">
                <img src="images/testi-side-img_05.png" className="img-fluid" alt="#" />
              </div>
            </div>
            <div className="testimonial-wrap quaternary-br-color">
              <img src="images/testi-img2.jpg" className="img-fluid testi-img-icon" alt="#" />
              <ul>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
              </ul>
              <p><span>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation.
              </p>
              <span className="testi-name">Mary Jane (ceo)</span>
              <div className="testi-styled-bg">
                <img src="images/testi-side-img_05.png" className="img-fluid" alt="#" />
              </div>
            </div>
            <div className="testimonial-wrap">
              <img src="images/testi-img3.jpg" className="img-fluid testi-img-icon" alt="#" />
              <ul>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
              </ul>
              <p><span>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation.
              </p>
              <span className="testi-name">John Doe (client)</span>
              <div className="testi-styled-bg">
                <img src="images/testi-side-img_05.png" className="img-fluid" alt="#" />
              </div>
            </div>
            <div className="testimonial-wrap quaternary-br-color">
              <img src="images/testi-img4.jpg" className="img-fluid testi-img-icon" alt="#" />
              <ul>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
                <li><i className="fas fa-star" /></li>
              </ul>
              <p><span>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation.
              </p>
              <span className="testi-name">Jane Smith (client)</span>
              <div className="testi-styled-bg">
                <img src="images/testi-side-img_05.png" className="img-fluid" alt="#" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

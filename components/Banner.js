import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
  return (
    <div className="container">
      <Carousel
        showThumbs={false}
        showArrows={false} // Hide default arrows
        showStatus={false}
        infiniteLoop={true}
        selectedItem={1}
        emulateTouch={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow-prev"
            >
              <span className="arrow-icon">&#8249;</span>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow-next"
            >
              <span className="arrow-icon">&#8250;</span>
            </button>
          )
        }
        showStatus={false}
        emulateTouch={true}
      >
        <div className="banner">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
              <div className="main-title">
                <span>We are here for you</span>
                <h1>What Makes Us Better, Makes You Better.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus eu lacus ex. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos ipsum dolor sit
                  amet.
                </p>
                <a href="#" className="btn btn-primary">
                  Make Appointment
                </a>
                <a
                  href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                  className="play-btn popup-youtube"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7 d-flex align-items-end">
              <div className="anim-container flex-fill">
                <svg
                  className="circle-svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 754 733"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Add your SVG path elements for the circles */}
                </svg>
                <img
                  src="/public/images/hero-doctor-1.png"
                  className="img-fluid animated-hero"
                  alt="hero"
                />
                <ul className="main-slider-social">
                  <li>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
              <div className="main-title">
                <span>We are here for you</span>
                <h1>What Makes Us Better, Makes You Better.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus eu lacus ex. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos ipsum dolor sit
                  amet.
                </p>
                <a href="#" className="btn btn-primary">
                  Make Appointment
                </a>
                <a
                  href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                  className="play-btn popup-youtube"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7 d-flex align-items-end">
              <div className="anim-container flex-fill">
                <svg
                  className="circle-svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 754 733"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                 //
                </svg>
                <img
                  src="./images/hero-doctor-1.png"
                  className="img-fluid animated-hero"
                  alt="hero"
                />
                <ul className="main-slider-social">
                  <li>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
              <div className="main-title">
                <span>We are here for you</span>
                <h1>What Makes Us Better, Makes You Better.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus eu lacus ex. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos ipsum dolor sit
                  amet.
                </p>
                <a href="#" className="btn btn-primary">
                  Make Appointment
                </a>
                <a
                  href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                  className="play-btn popup-youtube"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7 d-flex align-items-end">
              <div className="anim-container flex-fill">
                <svg
                  className="circle-svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 754 733"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  //
                </svg>
                <img
                  src="./images/hero-doctor-1.png"
                  className="img-fluid animated-hero"
                  alt="hero"
                />
                <ul className="main-slider-social">
                  <li>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;









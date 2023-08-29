import React from 'react'
import { Carousel } from 'react-responsive-carousel';


function Service() {
  return (
    <>
         <section className="space light">
      <div className="container container-custom">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-style1">
              <span>Our Services</span>
              <h2>High Quality Services for You</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000} // 3 seconds interval
              showArrows={false}
              showIndicators={false}
            
              swipeable={true}
              emulateTouch={true}
              centerMode={true}
              centerSlidePercentage={33.3333} // 1/3 of the screen width
              renderCenterLeftControls={() => null}
              renderCenterRightControls={() => null}
            >
              <div className="service-block yellow">
                <img src="images/service-icon1.png"  height={100} width={100} alt="#" />
                <h3>Dental Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore
                </p>
                <a href="#" className="btn btn-dark">
                  READ MORE
                </a>
                <div className="service-bg-icon">
                  <img
                    src="images/services-bg1.png"
                    className="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
              <div className="service-block green">
                <img src="images/service-icon2.png" height={100} width={100} alt="#" />
                <h3>Eye Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore
                </p>
                <a href="#" className="btn btn-dark">
                  READ MORE
                </a>
                <div className="service-bg-icon">
                  <img
                    src="images/services-bg2.png"
                    className="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
              <div className="service-block blue">
                <img src="images/service-icon3.png"  height={100} width={100} alt="#" />
                <h3>Allergic Issue</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore
                </p>
                <a href="#" className="btn btn-dark">
                  READ MORE
                </a>
                <div className="service-bg-icon">
                  <img
                    src="images/services-bg3.png"
                    className="img-fluid" 
                    alt="#"
                  />
                </div>
              </div>
              <div className="service-block green">
                <img src="images/service-icon3.png"  height={100} width={100} alt="#" />
                <h3>Allergic Issue</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor incididunt ut labore
                </p>
                <a href="#" className="btn btn-dark">
                  READ MORE
                </a>
                <div className="service-bg-icon">
                  <img
                    src="images/services-bg4.png"
                    className="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center service-help_link">
              Contact us for better help and services.
              <a href="#">Let’s get started</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Service

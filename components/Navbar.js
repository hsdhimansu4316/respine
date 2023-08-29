import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <>
           <nav>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Nav menu */}
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="#" />
              </a>
              <button
                className="navbar-toggler nav-custome1"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleMobileMenu}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  isMobileMenuOpen ? 'show' : ''
                }`}
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home <i className="fas fa-plus"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="index.html">
                        Home Page One
                      </a>
                      <a className="dropdown-item" href="index-2.html">
                        Home Page Two
                      </a>
                      <a className="dropdown-item" href="index-3.html">
                        Home Page Three
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown1"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Department <i className="fas fa-plus"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                      <a className="dropdown-item" href="services.html">
                        Dental Care
                      </a>
                      <a className="dropdown-item" href="services-2.html">
                        Cardiology
                      </a>
                      <a className="dropdown-item" href="services-3.html">
                        Neurology
                      </a>
                      <a className="dropdown-item" href="services-detail.html">
                        Eye Care
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Patients <i className="fas fa-plus"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                        >
                          Services <i className="fas fa-plus"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu1">
                          <li>
                            <a className="dropdown-item" href="services.html">
                              Services One
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="services-2.html">
                              Services Two
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="services-3.html">
                              Services Three
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="services-detail.html"
                            >
                              Service Detail
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="appointment.html">
                          Appointment
                        </a>
                      </li>
                      <li className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          href="#"
                        >
                          Our Doctors <i className="fas fa-plus"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu1">
                          <li>
                            <a className="dropdown-item" href="doctors.html">
                              Doctors One
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="doctors-2.html">
                              Doctors Two
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="doctors-3.html">
                              Doctors Three
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="pricing.html">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog <i className="fas fa-plus"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                      <a className="dropdown-item" href="blog-standard.html">
                        Blog Stadared
                      </a>
                      <a className="dropdown-item" href="blog-list.html">
                        Blog List
                      </a>
                      <a className="dropdown-item" href="blog-grid.html">
                        Blog Grid
                      </a>
                      <a className="dropdown-item" href="blog-grid-2.html">
                        Blog Grid-2
                      </a>
                      <a className="dropdown-item" href="blog-details.html">
                        Blog Details
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown4"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages <i className="fas fa-plus"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown4">
                      <a className="dropdown-item" href="about.html">
                        About
                      </a>
                      <a className="dropdown-item" href="contact-us.html">
                        Contact One
                      </a>
                      <a className="dropdown-item" href="contact-us-2.html">
                        Contact Two
                      </a>
                      <a className="dropdown-item" href="error.html">
                        Error 404
                      </a>
                    </div>
                  </li>
                  <li>
                    <ul className="cart-seperate">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <i className="fas fa-search fa-top-search"></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <i className="fas fa-shopping-cart fa-top-search"></i>
                          <span>2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link btn btn-outline-primary appointment-btn-top"
                      href="appointment.html"
                    >
                      Appointment
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar

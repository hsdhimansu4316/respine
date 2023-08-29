import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the main Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';


SwiperCore.use([Navigation, Pagination]);

const teamMembers = [
  {
    image: 'images/team1.jpg',
    name: 'Dr. Mary Joe',
    specialty: 'Cardiologist Specialist',
  },
  {
    image: 'images/team2.jpg',
    name: 'Thomas Jack',
    specialty: 'Neurology Specialist',
  },
  {
    image: 'images/team3.jpg',
    name: 'Dr. Mary Joe',
    specialty: 'Cardiologist Specialist',
  },
  {
    image: 'images/team4.jpg',
    name: 'Dr. Hessy Hanna',
    specialty: 'Radiology Specialist',
  },
  {
    image: 'images/team5.jpg',
    name: 'Dr. Mary Joe',
    specialty: 'Cardiologist Specialist',
  },
];


function OurMember() {
  return (
    <>
       <section className="our-team">
      <div className="container container-custom">
        <div className="row">
          <div className="col-md-12">
            <div className="sub-title_center">
              <span>---- Our Team ----</span>
              <h2>Our Dedicated Doctors</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            loop={true}
            loopFillGroupWithBlank={true}
            slidesPerView={3} // Display 3 slides at a time
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
             }}
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="team-img_block">
                    <div className="team-img-socila-block">
                      <img src={member.image} className="img-fluid" alt="#" />
                      <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                      </ul>
                    </div>
                    <h4>{member.name}</h4>
                    <p>{member.specialty}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default OurMember

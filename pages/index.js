import Head from 'next/head'
import Image from 'next/image'


import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import BookingForm from '@/components/BookingForm'
import Service from '@/components/Service'
import WhyChoose from '@/components/WhyChoose'
import WhoWeAre from '@/components/WhoWeAre'
import OurMember from '@/components/OurMember'
import Consultant from '@/components/Consultant'
import Testimonial from '@/components/Testimonial'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'



export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <BookingForm/>
      <Service/>
      <WhyChoose/>
      <WhoWeAre/>
      <OurMember/>
      <Consultant/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </>
  )
}

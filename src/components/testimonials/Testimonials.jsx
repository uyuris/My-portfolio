import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';
import dataTestimonials from '../../data/dataTestimonials';
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
// import "react-alice-carousel/lib/scss/alice-carousel.scss";

const Testimonials = () => (
  <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper
      className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {
        dataTestimonials.map(({
          id, userName, avatar, review,
        }) => (
          <SwiperSlide
            className="testimonial"
            key={id}
          >
            <div className="client__avatar">
              <img src={avatar} alt="Avatar one" />
            </div>
            <h5 className="client__name">{userName}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))
      }
    </Swiper>
  </section>
);

export default Testimonials;

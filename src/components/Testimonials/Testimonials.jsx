import React, { useMemo } from "react";
import Slider from "react-slick";
import { testimonialData } from "./testimonialData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const settings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: [
        {
          breakpoint: 10000,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }),
    []
  );

  return (
    <section className="py-10 mb-10" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Header */}
        <header className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1
            id="testimonials-heading"
            data-aos="fade-up"
            className="text-3xl font-bold"
          >
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi.
          </p>
        </header>

        {/* Slider */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((item) => (
              <TestimonialCard key={item.id} {...item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);

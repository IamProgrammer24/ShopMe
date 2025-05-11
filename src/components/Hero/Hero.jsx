import React, { useMemo } from "react";
import Slider from "react-slick";
import HeroSlide from "./HeroSlide";
import { heroSlides } from "./heroData";

const Hero = ({ handleOrderPopup }) => {
  const settings = useMemo(
    () => ({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      pauseOnFocus: true,
    }),
    []
  );

  return (
    <section
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200"
      aria-label="Hero Banner"
    >
      {/* Background Pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10" />

      {/* Hero Content */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {heroSlides.map((slide) => (
            <HeroSlide
              key={slide.id}
              title={slide.title}
              description={slide.description}
              img={slide.img}
              handleOrderPopup={handleOrderPopup}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default React.memo(Hero);

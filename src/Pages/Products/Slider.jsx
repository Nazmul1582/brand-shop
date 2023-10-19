// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SlideContent from "./SlideContent";

const Slider = () => {
  const images = [
    {
      id: 1,
      img: "https://i.ibb.co/C1fCWd1/smartwatch1.jpg",
    },
    {
      id: 2,
      img: "https://i.ibb.co/C1fCWd1/smartwatch1.jpg",
    },
    {
      id: 3,
      img: "https://i.ibb.co/C1fCWd1/smartwatch1.jpg",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay, Pagination, Navigation]}
        className="mySwiper h-96 relative"
      >
        <SwiperSlide style={{ backgroundImage: `url(${images[0].img})` }}>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${images[1].img})` }}>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${images[2].img})` }}>
          <SlideContent />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

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
        className="mySwiper w-full h-[90vh] relative"
      >
        <SwiperSlide>
          <img className="w-full h-full" src="https://i.ibb.co/ts6CTJG/levitating-music-headphones-display.jpg" alt="slider image"/>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src="https://i.ibb.co/yqyYSSB/google-phone.jpg" alt="slider image" />
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src="https://i.ibb.co/VDVtcWZ/laptop3.jpg" alt="slider image" />
          <SlideContent />
        </SwiperSlide>        
      </Swiper>
    </>
  );
};

export default Slider;

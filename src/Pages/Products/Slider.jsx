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
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideContent image="https://i.ibb.co/ts6CTJG/levitating-music-headphones-display.jpg" productName="Headphone" price={749.99} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent image="https://i.ibb.co/yqyYSSB/google-phone.jpg" productName="Smartphone" price={899.99} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent image="https://i.ibb.co/VDVtcWZ/laptop3.jpg" productName="Laptop" price={1299.99} />
        </SwiperSlide>        
      </Swiper>
    </>
  );
};

export default Slider;

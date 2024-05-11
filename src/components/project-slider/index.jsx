import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
export default () => {
  return (
    <Swiper
    modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        424: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide>
       <div
          id="slide"
          className="border border-purple-500 rounded-2xl h-[300px] sm:h-[300px]"
        >
          <img
            src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
       <div
          id="slide"
          className="border border-purple-500 rounded-2xl h-[200px] sm:h-[300px]"
        >
          <img
            src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
       <div
          id="slide"
          className="border border-purple-500 rounded-2xl h-[200px] sm:h-[300px]"
        >
          <img
            src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
       <div
          id="slide"
          className="border border-purple-500 rounded-2xl h-[200px] sm:h-[300px]"
        >
          <img
            src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";

import { sliders } from "../dummyData";

function Hero() {
  return (
    <div className="mb-[16px]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        modules={[EffectFade]}
        className="mySwiper"
      >
        {
          sliders.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="pt-[40%] w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${item.img})` }}></div>
              </SwiperSlide>
            )
          })
        }


      </Swiper>
    </div>
  )
}

export default Hero


import React, { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import { LayoutComponent } from '../Layouts'
import { CardStore, PostCard, SupportSection } from '../components';
import { cards } from '../dummyData';


function CommunityPage() {
  const ref = useRef()

  const handlePrevBtn = useCallback(() => {
    if (!ref.current) return;
    ref.current.swiper.slidePrev();
  }, [])

  const handleNextBtn = useCallback(() => {
    if (!ref.current) return;
    ref.current.swiper.slideNext();
  }, [])
  return (
    <div className='w-full'>
      <LayoutComponent titleColor="border-red-700" title="Cửa hàng uy tín">
        <div className='relative'>
          <Swiper
            slidesPerView={4}
            spaceBetween={12}
            slidesPerGroup={1}
            loop={true}

            loopFillGroupWithBlank={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            ref={ref}
          >
            <SwiperSlide>
              <div className='w-full'>
                {
                  [...cards].slice(0, 3).map((item, index) => {
                    return (
                      <div className="mb-5 shadow-sd-main" key={index}>
                        <CardStore data={item} />
                      </div>
                    )
                  })
                }
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-full'>
                {
                  [...cards].slice(3, 6).map((item, index) => {
                    return (
                      <div className="mb-5 shadow-sd-main" key={index}>
                        <CardStore data={item} />
                      </div>
                    )
                  })
                }
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <button
          onClick={() => handlePrevBtn()}
          className='py-[1rem] rounded-[6px] hover:bg-[#000000aa] px-[1rem] absolute top-1/2 left-0 bg-[#00000099] z-[1] -translate-y-1/2 text-white font-[600] text-[1.5rem]'>
          <i className="fas fa-angle-left"></i>
        </button>
        <button
          onClick={() => handleNextBtn()}
          className='py-[1rem] rounded-[6px] hover:bg-[#000000aa] px-[1rem] absolute top-1/2 right-0 bg-[#00000099] z-[1] -translate-y-1/2 text-white font-[600] text-[1.5rem]'>
          <i className="fas fa-angle-right"></i>
        </button>

      </LayoutComponent>


      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <SupportSection />

    </div>
  )
}

export default CommunityPage
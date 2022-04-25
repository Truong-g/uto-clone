

import { useRef, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import {
  Hero,
  ProductGrid,
  CardStore,
  CategorySection,
  ProductCard,
  SupportSection
} from '../components'
import { LayoutComponent } from '../Layouts'
import { Link } from 'react-router-dom';
import { products, cards } from '../dummyData'


function MarketPage() {

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
      <Hero />
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
                        <CardStore data={item}/>
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
                        <CardStore data={item}/>
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
      <ProductGrid />
      <CategorySection />
      <LayoutComponent title="Mặt hàng mới" titleColor="border-blue-800">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[12px]">
          {
            [...products].slice(3, 12).map((item, index) => {
              return <ProductCard key={index} data={item} />
            })
          }
        </div>
      </LayoutComponent>
      <LayoutComponent title="Mặt hàng nổi bật" titleColor="border-red-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[12px]">
          {
            [...products].slice(5, 12).map((item, index) => {
              return <ProductCard key={index} data={item} />
            })
          }

        </div>
      </LayoutComponent>

      <div className="w-full mb-5">
        <Link to=""
          style={{ backgroundImage: `url("https://uto.vn/storage/uploads/2021/11/25/619f5e0cddc7c.jpg")` }}
          className="pt-[38.2%] block bg-center bg-cover bg-no-repeat"
        />
      </div>

      <div className="w-full mb-5">
        <Link to=""
          style={{ backgroundImage: `url("https://uto.vn/storage/uploads/2021/11/25/619f5e0284c62.jpg")` }}
          className="pt-[38.2%] block bg-center bg-cover bg-no-repeat"
        />
      </div>

      <LayoutComponent title="Dành riêng cho bạn" titleColor="border-red-500">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[12px]">
          {
            [...products].slice(7).map((item, index) => {
              return <ProductCard key={index} data={item} />
            })
          }

        </div>
      </LayoutComponent>
      <SupportSection />
    </div >
  )
}

export default MarketPage
import { useCallback, useRef } from 'react';
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";


const CardStore = () => {
    return (
        <div className="w-full shadow-sd-main rounded-[6px] relative">
            <div className='w-full'>
                <img src="https://file.uto.vn/image/516D66583173735957556862706B70444261577550314E6868424C7156486D7854796437726B45626D506935576D" className='w-[70%] mx-auto' />
            </div>
            <div className='p-[10px] h-[58px]'>
                <div className='text-[0.8rem] grid__store--card overflow-hidden font-[600] text-[#333] h-full'>
                    Uniehouse - Chuyên làm đẹp Chuyên làm đẹp
                </div>
            </div>
        </div>
    )
}




function GridStore({ title }) {

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
        <div className='p-[10px] bg-white rounded-[6px] shadow-sd-main mb-5 relative'>
            <h3 className='pl-[1rem] text-[15px] font-[600] text-[#555] mb-[10px] uppercase border-solid border-red-500 border-l-[5px]'>{title}</h3>
            <div className="w-full">
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
                            <div className="mb-5 shadow-sd-main">
                                <CardStore />
                            </div>
                            <div className="mb-5 shadow-sd-main">
                                <CardStore />
                            </div>
                            <div className='shadow-sd-main mb-5'>
                                <CardStore />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full'>
                            <div className="mb-5 shadow-sd-main">
                                <CardStore />
                            </div>
                            <div className="mb-5 shadow-sd-main">
                                <CardStore />
                            </div>
                            <div className='shadow-sd-main mb-5'>
                                <CardStore />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full'>
                            <div className="mb-5 shadow-sd-main">
                                <CardStore />
                            </div>
                            <div className="mb-5 shadow-sd-main">
                                <CardStore />
                            </div>
                            <div className='shadow-sd-main mb-5'>
                                <CardStore />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full'>
                            <div className="mb-5 shadow-sd-main">
                                <CardStore />
                            </div>
                            <div className="mb-5 shadow-sd-main">
                                <CardStore />
                            </div>
                            <div className='shadow-sd-main mb-5'>
                                <CardStore />
                            </div>
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
        </div>
    )
}

GridStore.propTypes = {
    title: PropTypes.string
}

GridStore.defaultProps = {
    title: "cửa hàng uy tín"
}

export default GridStore
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const HeroImages = () => {
    return (

        <div className="w-full h-full flex">
            <div className="w-[600px] h-[385px] bg-gray-500 flex flex-col pl-16 pt-16">
                <h1 className="text-white text-4xl font-bold">The Gentleman</h1>
                <p className="text-white text-sm font-bold">Biography, Documentary, History</p>
                <div className="max-w-[600px] max-h-[300px]"></div>
            </div>
            <div className="w-[600px] h-[385px] bg-gray-500 flex flex-col pl-16 pt-16">
                <h1 className="text-white text-4xl font-bold">The Gentleman</h1>
                <p className="text-white text-sm font-bold">Biography, Documentary, History</p>
                <div className="max-w-[600px] max-h-[300px]"></div>
            </div>
            // <img src="/assets/images/mountain.webp" alt="" />
        </div>

        /*
        <>
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            ...
            </Swiper>
        </>
        */
    )
}

export default HeroImages
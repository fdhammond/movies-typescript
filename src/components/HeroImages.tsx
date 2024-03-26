import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroImages = ({ movies }) => {
    return (
        <Swiper
            spaceBetween={0}
            modules={[Autoplay, Pagination]}
            slidesPerView={2}
            slidesPerGroup={2}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true, }}
            loop
            className='w-[1200px] h-auto'
        >
            {movies.slice(0, 4).map((movie, index) => (
                <SwiperSlide key={index}>
                    <div className="w-full h-full flex justify-center mb-12">
                        <div className="w-[600px] h-[385px] flex flex-col">
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="w-[600px] h-[385px] object-cover object-center z-0 absolute" alt="" />
                            <div className='z-40 pl-16 pt-16'>
                                <h1 className="text-white text-4xl font-bold z-40">{movie.title}</h1>
                                <p className="text-white text-sm font-bold z-40">Biography, Documentary, History</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroImages;

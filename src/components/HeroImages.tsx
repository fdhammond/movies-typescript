import { useState, useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroImages = ({ movies }) => {
    const [slidePerView, setSlidePerView] = useState(2);
    const [slidePerGroup, setSlidePerGroup] = useState(2);

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth < 768) {
                setSlidePerView(1);
                setSlidePerGroup(1);
            } else if (window.innerWidth < 1080) {
                setSlidePerView(2);
                setSlidePerGroup(2);
            } else {
                setSlidePerView(2);
                setSlidePerGroup(2);
            }
        };
        window.addEventListener("resize", checkScreenSize);
        window.addEventListener("load", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const variants = {
        hover: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.1
            }
        },
    }

    const blurVariants = {
        hover: {
            opacity: 0.5,
            transition: {
                duration: 0.1
            }
        },
    }

    return (
        <Swiper
            spaceBetween={0}
            modules={[Autoplay, Pagination]}
            slidesPerView={slidePerView}
            slidesPerGroup={slidePerGroup}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true, }}
            loop
            className='md:w-[1200px] md:h-auto w-auto h-auto'
        >
            {movies.slice(0, 4).map((movie, index) => (
                <SwiperSlide key={index}>
                    <motion.div
                    whileHover="hover"
                    className="w-full h-full flex justify-center mb-12">
                        <motion.div
                            variants={blurVariants}
                            className="w-[600px] h-[385px] flex flex-col"
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                className="w-[600px] h-[385px] object-cover object-center z-0 absolute" alt=""
                            />
                            <div className='z-40 pl-16 pt-16'>
                                <h1 className="text-white text-4xl font-bold z-40">{movie.title}</h1>
                                <p className="text-white text-sm font-bold z-40">Biography, Documentary, History</p>
                            </div>
                        </motion.div>
                        <motion.div
                        variants={variants}
                        initial={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.1, ease: 'easeIn' }}
                        className='flex w-full h-auto justify-end mt-auto mb-8 mr-8'>
                            <motion.a
                                variants={variants}
                                className="text-white text-sm font-bold z-40" href=""
                            >Watch the trailer</motion.a>
                        </motion.div>
                    </motion.div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroImages;

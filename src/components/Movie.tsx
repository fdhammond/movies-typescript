import { useState } from "react";
import LayoutMovie from "../layout/LayoutMovie";
import { FaRegCirclePlay } from "react-icons/fa6";
import VideoModal from "./VideoModal";
import getMovieGenre from "../helpers/getMovieGenre";
import Stars from "./Stars";

const Movie = ({ movie }) => {
    const releaseYear = movie.release_date.split("-")[0];
    const [showModal, setShowModal] = useState(false);

    console.log(movie);


    const movieGenre = getMovieGenre(movie.genres)

    return (
        <>
        <div className={`absolute flex flex-col justify-center z-40 ml-16 h-screen ${!showModal ? 'invisible' : 'visible'}`}>
            <VideoModal showModal={showModal} setShowModal={setShowModal} />
        </div>
        <LayoutMovie>
            <div className="w-full min-h-screen flex-col md:flex-row flex justify-start align-middle items-start md:pl-48 pt-20">
                <div className="max-w-[370px] h-[545px] relative">
                    <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-auto flex flex-col gap-6 justify-center align-center text-left md:text-gray-200 text-black pt-8 md:pl-20 md:mt-6">
                    <p className="text-2xl font-bold">{releaseYear}</p>
                    <h1 className="text-4xl md:text-7xl font-bold">{movie.title}</h1>
                    <div className="md:min-h-32">
                        <p className="text-md max-w-xl">{movie.overview}</p>
                    </div>
                    <div className="flex justify-start align-center gap-4 items-center flex-wrap">
                        <div className="flex gap-4 justify-start items-center md:w-auto w-full">
                            <FaRegCirclePlay className="text-4xl hover:text-black cursor-pointer" onClick={() => setShowModal(true)} />
                            <p>Watch the trailer</p>
                        </div>
                        <div className="border-r-[.1rem] border-solid border-gray-200 h-12 mx-4 md:block hidden" />
                            <p>{movieGenre}</p>
                            <p>{movie.release_date}</p>
                        </div>
                        <div className="flex justify-start md:items-center gap-0 md:gap-8 md:flex-row flex-col">
                            <div className="md:mt-10 mt-2 md:border-r-[.1rem] md:border-solid md:border-gray-200 md:h-12 w-auto pr-8">
                                <Stars rating={movie.vote_average} />
                                <p className="text-sm mt-2 text-black font-bold">{movie.vote_count} Votes</p>
                            </div>
                            <div className="md:mt-10 mt-4 md:border-r-[.1rem] md:border-solid md:border-gray-200 md:h-12 w-auto pr-8">
                                <h1 className="text-[40px] text-black font-bold">{movie.vote_average.toFixed(1)} <span className="text-sm">IMDB</span></h1>
                            </div>
                            <div className="md:mt-10 mt-4 md:border-r-[.1rem] md:border-solid md:border-gray-200 md:h-12 w-auto pr-8">
                                <p className="text-sm text-gray-500 font-bold">Network</p>
                                <p className="text-sm text-black font-bold">{movie.production_companies[0].name}</p>
                            </div>
                            <div className="md:mt-10 mt-4 md:border-r-[.1rem] md:border-solid md:border-gray-200 md:h-12 w-auto pr-8">
                                <p className="text-sm text-gray-500 font-bold">Status</p>
                                <p className="text-sm text-black font-bold">{movie.status}</p>
                            </div>
                        </div>
                </div>
            </div>
            </LayoutMovie>
            </>
    );
}

export default Movie;

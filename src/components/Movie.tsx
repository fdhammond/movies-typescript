import { useState } from "react";
import LayoutMovie from "../layout/LayoutMovie";
import { FaRegCirclePlay } from "react-icons/fa6";
import VideoModal from "./VideoModal";
import getMovieGenre from "../helpers/getMovieGenre";

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
                <div className="max-w-auto flex gap-6 justify-center align-center text-left flex-col md:text-gray-200 text-black pt-8 md:pl-20">
                    <p className="text-2xl font-bold">{releaseYear}</p>
                    <h1 className="text-4xl md:text-7xl font-bold truncate">{movie.title}</h1>
                    <p className="text-md max-w-xl">{movie.overview}</p>
                    <div className="flex justify-start align-center gap-4 items-center flex-wrap">
                        <div className="flex gap-4 justify-start items-center md:w-auto w-full">
                            <FaRegCirclePlay className="text-4xl hover:text-black cursor-pointer" onClick={() => setShowModal(true)} />
                            <p>Watch the trailer</p>
                        </div>
                        <div className="border-r-[.1rem] border-solid border-gray-200 h-12 mx-4 md:block hidden" />
                        <p>{movieGenre}</p>
                        <p>{movie.release_date}</p>
                    </div>
                </div>
            </div>
            </LayoutMovie>
            </>
    );
}

export default Movie;

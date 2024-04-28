import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MovieProps } from "../types";
import HeroImages from "./HeroImages";
import MovieCard from "./MovieCard";
import MovieLoader from "./MovieLoader";
import VideoModal from "./VideoModal";

const Movies = ({ movies }: { movies: MovieProps[] }) => {
    const [_, setIsLoading] = useState(true);
    const [showBlackScreen, setShowBlackScreen] = useState(true);
    const [__, setShowCircle] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Simulating data loading delay
        const delay = setTimeout(() => {
            setIsLoading(false);
            setShowCircle(false);
        }, 3000); // Adjust the delay time as needed

        // After 4 seconds, hide the black screen
        const blackScreenTimer = setTimeout(() => {
            setShowBlackScreen(false);
        }, 4000); // 4 seconds

        return () => {
            clearTimeout(delay);
            clearTimeout(blackScreenTimer);
        };
    }, []);

    return (
        <>
            <AnimatePresence>
                {showBlackScreen && (
                    <motion.div
                        className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex justify-center items-center"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 1, y: "-100vh" }}
                        transition={{ duration: 1 }}
                    >
                        <MovieLoader />
                    </motion.div>
                )}
            </AnimatePresence>
            {showModal && <VideoModal showModal={showModal} setShowModal={setShowModal} />}

            <div>
                <HeroImages movies={movies} />
            </div>
            <div className="w-full h-full grid md:grid-cols-4 md:gap-8 grid-cols-1 gap-4">
                {
                    movies.map((movie: MovieProps) => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            genre_ids={""}
                            movieId={movie.id}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Movies;

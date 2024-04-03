import { MovieProps } from "../types";
import HeroImages from "./HeroImages";
import MovieCard from "./MovieCard";

const Movies = ({movies}: {movies: MovieProps[]}) => {
    return (
        <>
            <div>
                <HeroImages movies={movies} />
            </div>
            <div className="w-full h-full grid md:grid-cols-5 md:gap-8 grid-cols-1 gap-4">
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

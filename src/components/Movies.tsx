import { MovieProps } from "../types";
import MovieCard from "./MovieCard";

const Movies = ({movies}) => {

    return (
        <div className="w-full h-full grid md:grid-cols-5 md:gap-8 grid-cols-1 gap-4">
            {
                movies.map((movie: MovieProps) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        // genre_ids={handleGetMovieGenres(movie.genre_ids)}
                        movieId={movie.id}
                    />
                ))
            }
        </div>
    );
};

export default Movies;

import {useQuery} from '@tanstack/react-query'
import fetchMovieById from '../helpers/fetchMovieById'

export default function useGetMovies(movieId) {
    const results = useQuery(['movies', movieId], fetchMovieById)
    return results
}

import {useQuery} from '@tanstack/react-query'
import fetchMovieById from '../helpers/fetchMovieById'

export default function useGetMovies(movieId: number) {
    const results = useQuery(['movies', movieId], () => fetchMovieById(movieId))
    return results
}

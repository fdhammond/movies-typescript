import {useQuery} from '@tanstack/react-query'
import fetchMovies from '../helpers/fetchMovies'

export default function useGetMovies() {
    const results = useQuery(['movies'], fetchMovies)
    return results
}

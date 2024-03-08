const fetchMovies = async () => {
    const API_KEY = import.meta.env.VITE_MOVIES_KEY
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1&language=en-US&page_size=10`
    const response = await fetch(URL)
    const data = await response.json()

    if (!response.ok) {
        throw new Error('Movie fetch not ok.')
    }

    return data.results

}

export default fetchMovies;
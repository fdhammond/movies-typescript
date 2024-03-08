const fetchMovieById = async (id) => {
    const API_KEY = import.meta.env.VITE_MOVIES_KEY;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
};

export default fetchMovieById;
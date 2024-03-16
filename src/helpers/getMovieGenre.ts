interface Genre {
    name: string
}

const getMovieGenre = (movieGenres: Genre[]) => {
    return movieGenres.map((genre) => genre.name).join(", ");
}


export default getMovieGenre;
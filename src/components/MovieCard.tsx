import { Link } from '@tanstack/react-router'

interface MovieCard {
  title: string
  poster_path: string
  genre_ids: string | undefined
  movieId: number | string
}

export default function MovieCard({
  title,
//   genre_ids,
  poster_path,
  movieId,
}: MovieCard) {
  return (
    <div className="md:w-[300px] h-[528px]">
      <Link to={`/movie/${movieId.toString()}`} params={{ movieId: movieId.toString() }}>
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
      </Link>
      <div className="flex flex-col justify-center items-center self-center mt-4">
        <h1 className="text-white text-2xl font-bold truncate text-center w-full px-6">
          {title}
        </h1>
        <p className="text-white text-center">genre</p>
      </div>
    </div>
  )
}

import Layout from "../layout/Layout";
const Movie = ({ movie }) => {
    return (
        <Layout>
            <div className="w-[100%] h-[100vh]">
                <div className="block w-[300px] h-[450px]">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                />
                </div>
                <div className="flex flex-col justify-center items-center self-center mt-4">
                <h1 className=" text-2xl font-bold truncate text-center w-full px-6">
                    {movie.title}
                </h1>
                </div>
            </div>
        </Layout>
    );
}

export default Movie;

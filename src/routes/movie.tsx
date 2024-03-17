import { Route } from '@tanstack/react-router'
import { rootRoute } from './root'
import Movie from '../components/Movie'
import fetchMovieById from '../helpers/fetchMovieById';



export const movieRoute = new Route({
    getParentRoute: () => rootRoute,
    loader: async ({ params }) => {
        const data = await fetchMovieById(params.id);
        return data
    },
    path: 'movie/$id',
    component: () => {
        const data = movieRoute.useLoaderData();
        return (
            <Movie movie={data} />
        )
    },
    pendingComponent: () => <div>Loading...</div>,
    errorComponent: () => <div>Error loading movie...</div>,
});

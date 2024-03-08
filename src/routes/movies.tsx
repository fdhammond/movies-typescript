import { Route } from '@tanstack/react-router'
import { rootRoute } from './root'
import Movies from '../components/Movies'
import fetchMovies from "../helpers/fetchMovies";
import Layout from '../layout/Layout';

export const moviesRoute = new Route({
    getParentRoute: () => rootRoute,
    loader: fetchMovies,
    path: '/',
    component: () => {
        const data = moviesRoute.useLoaderData()
        return (
            <Layout>
                <Movies movies={data} />
            </Layout>
        )
    },
    pendingComponent: () => <div>Loading...</div>,
    errorComponent: () => <div>Error loading movies...</div>
})
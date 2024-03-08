import { Router, RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { rootRoute } from "./root";
import { moviesRoute } from "./movies";
import { movieRoute } from "./movie";

const routeTree = rootRoute.addChildren([moviesRoute, movieRoute])

const router = new Router({ routeTree, defaultPreload: 'intent' })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    }
})

export const AppRouter = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}
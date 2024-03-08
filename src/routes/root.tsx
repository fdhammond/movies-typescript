import { Link, RootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";


export const rootRoute = new RootRoute({
    component: () => (
        <div>
            <Outlet />
            <TanStackRouterDevtools />
        </div>
    )
})
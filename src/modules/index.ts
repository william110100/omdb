import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const MovieModal = lazy(() => import("./MovieModal"));

export { Dashboard, MovieModal };

import Index from "./pages";
import MovieIndex from "./pages/movie/index";

export const routes: { path: string; element: JSX.Element }[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/movie",
    element: <MovieIndex />,
  },
];

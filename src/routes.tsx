import Index from "./pages";
import MovieIndex from "./pages/movie/index";
import ComingSoon from "./pages/coming-soon.tsx";

export const routes: { path: string; element: JSX.Element }[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/movie",
    element: <MovieIndex />,
  },
  {
    path: "*",
    element: <ComingSoon />,
  },
];

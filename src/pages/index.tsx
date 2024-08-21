import MainCard from "../components/movie/main-card";
import MovieCard from "../components/movie/movie-card";

export default function Index() {
  return (
    <div className="w-full p-4 tablet:px-16 desktop:px-52">
      <MainCard />
      <div className="w-full bg-tertiary-500 p-4 flex overflow-x-scroll">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

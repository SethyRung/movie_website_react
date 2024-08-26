import MovieCard from "../../components/movie/movie-card";

export default function Index() {
  return (
    <div className="w-full p-4 tablet:px-16 desktop:px-52 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(208px,_1fr))]">
      {Array.from({ length: 12 }, (_, index) => index + 1).map((_, index) => (
        <div className="w-full bg-tertiary-500" key={index}>
          <MovieCard
            id={12}
            imgSrc="/assets/Avatar-Poster.webp"
            title="John WicK: Chapter 4"
            release="23/10/2023"
            rating={4.5}
            genre="Action"
          />
        </div>
      ))}
    </div>
  );
}

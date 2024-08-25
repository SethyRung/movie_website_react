import { useRef, useState } from "react";
import MainCard from "../components/movie/main-card";
import MovieCard from "../components/movie/movie-card";
import Tabs from "../components/tabs";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Index() {
  const tabs = [
    {
      title: "Now Playing",
      key: "nowPlaying",
    },
    {
      title: "Coming Soon",
      key: "comingSoon",
    },
    {
      title: "Show Time",
      key: "showTime",
    },
  ];
  const [currentTab, setCurrentTab] = useState<string>();

  const parentMovieCardRef = useRef<HTMLDivElement>(null);
  const scrollTo = (scrollTo: "ToLeft" | "ToRight") => {
    if (parentMovieCardRef.current) {
      const cardWidth = (parentMovieCardRef.current.firstChild as HTMLElement).offsetWidth;
      const scrollLeft = parentMovieCardRef.current.scrollLeft;
      let delta = scrollTo === "ToRight" ? cardWidth : -cardWidth;
      if (scrollLeft === 0) delta = delta + 16;

      parentMovieCardRef.current.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full p-4 tablet:px-16 desktop:px-52">
      <MainCard />
      <div className="flex justify-between items-center gap-8">
        <Tabs
          items={tabs}
          currentTab={currentTab}
          ui={{ wrapper: "lgMobile:w-fit" }}
          onCurrentTabChange={(vlaue) => setCurrentTab(vlaue)}
        />
        <div className="h-[1px] grow border border-grey-500 rounded hidden lgMobile:block"></div>
        <div className="hidden lgMobile:flex lgMobile:gap-2">
          <button
            className="p-1.5 w-8 h-8 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-left break-all line-clamp-1 inline-flex justify-center items-center text-sm gap-x-1.5 rounded-full shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
            onClick={() => scrollTo("ToLeft")}>
            <Icon icon="mdi-chevron-left" />
          </button>
          <button
            className="p-1.5 w-8 h-8 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-left break-all line-clamp-1 inline-flex justify-center items-center text-sm gap-x-1.5 rounded-full shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
            onClick={() => scrollTo("ToRight")}>
            <Icon icon="mdi-chevron-right" />
          </button>
        </div>
      </div>
      <div className="w-full bg-tertiary-500 p-4 flex overflow-x-scroll" ref={parentMovieCardRef}>
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

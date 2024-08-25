import { Icon } from "@iconify/react/dist/iconify.js";
import CastCard from "../../components/movie/cast-card";
import { useRef } from "react";
import { useParams } from "react-router-dom";

export default function Index() {
  const { id: movieId } = useParams();

  const cast = [
    { name: "Shawn Levy", role: "Director, Writer" },
    { name: "Shawn Levy", role: "Director, Writer" },
    { name: "Shawn Levy", role: "Director, Writer" },
    { name: "Shawn Levy", role: "Director, Writer" },
    { name: "John Romita Sr.", role: "Director, Writer" },
    { name: "Shawn Levy", role: "Director, Writer" },
    { name: "Shawn Levy", role: "Director, Writer" },
    { name: "Shawn Levy", role: "Director, Writer" },
    { name: "Shawn Levy", role: "Director, Writer" },
  ];

  const castCardRef = useRef<HTMLDivElement>(null);

  const scrollTo = (scrollTo: "ToLeft" | "ToRight") => {
    if (castCardRef.current) {
      const cardWidth = (castCardRef.current.firstChild as HTMLElement).offsetWidth;
      const gap = parseInt(window.getComputedStyle(castCardRef.current).columnGap, 10);

      const delta = scrollTo === "ToRight" ? cardWidth + gap : -(cardWidth + gap);
      castCardRef.current.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full p-4 tablet:px-16 desktop:px-52">
      <div className="p-4 bg-tertiary-500 rounded-lg flex flex-col tablet:flex-row tablet:gap-4">
        <img
          src="/assets/Avatar-Poster.webp"
          alt=""
          className="w-[320px] mx-auto object-cover rounded-lg"
        />
        <div>
          <div className="mt-4 mb-6">
            <h1 className="text-white text-2xl font-bold font-redHatText">
              Deadpool & Wolverine (2024)
            </h1>
            <p className="text-grey-500 text-sm font-redHatText mt-2">
              07/25/2024 (KH) Science Fiction, Action, Comedy 2h 8m
            </p>
          </div>
          <div className="flex items-center gap-7">
            <div className="w-16 h-16 flex justify-center items-center border-[4px] border-primary-500 rounded-full text-white text-xl font-bold font-redHatMono">
              83
              <sup className="ml-1 text-sm">%</sup>
            </div>
            <button className="p-2 bg-primary-500/30 rounded text-white flex items-center gap-2">
              <Icon icon="mdi-play-circle" />
              <span className="font-redHatText text-base font-bold">Play Trailer</span>
            </button>
          </div>
          <div className="text-white my-6">
            <h2 className="font-redHatText font-bold text-base">Overview</h2>
            <p className="mt-2 text-sm text-grey-500 text-justify">
              A listless Wade Wilson toils away in civilian life with his days as the morally
              flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential
              threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {cast.map((c, i) => (
              <div className="w-full break-all" key={`${i}-${c.name}`}>
                <h2 className="text-white font-redHatText font-bold text-sm mb-2">{c.name}</h2>
                <h2 className="text-grey-500 text-xs">{c.role}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 mb-4 flex justify-between items-center gap-8">
        <div className="flex items-center text-white font-roboto text-2xl font-bold">
          <Icon icon="mdi-account" />
          <h1>Cast</h1>
        </div>
        <div className="h-[1px] grow border border-grey-500 rounded"></div>
        <div className="flex gap-2">
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
      <div className="flex flex-col gap-8 tablet:flex-row tablet:gap-6 my-8">
        <div className="w-full pb-4 flex gap-4 overflow-x-scroll" ref={castCardRef}>
          {Array.from({ length: 5 }, (_, index) => index + 1).map((_, index) => (
            <CastCard
              profile="/assets/Avatar-Poster.webp"
              name="Ryan Reynolds"
              acting="Wade Wilson / Deadpool"
              key={index}
            />
          ))}
        </div>
        <div className="p-4 bg-tertiary-500 rounded grid grid-cols-2">
          <div className="grid gap-3">
            <div className="font-redHatText font-bold">
              <h1 className="text-white text-sm mb-1">Status</h1>
              <p className="text-grey-500 text-xs">Released</p>
            </div>
            <div className="font-redHatText font-bold">
              <h1 className="text-white text-sm mb-1">Original Language</h1>
              <p className="text-grey-500 text-xs">English</p>
            </div>
            <div className="font-redHatText font-bold">
              <h1 className="text-white text-sm mb-1">Revenue</h1>
              <p className="text-grey-500 text-xs">$250,000,000.00</p>
            </div>
            <div className="font-redHatText font-bold">
              <h1 className="text-white text-sm mb-1">Budget</h1>
              <p className="text-grey-500 text-xs">$250,000,000.00</p>
            </div>
          </div>
          <div className="font-redHatText font-bold text-white text-sm">
            <h1>KeyWord</h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="w-fit py-2 px-4 bg-secondary-500 rounded-md">Hero</div>
              <div className="w-fit py-2 px-4 bg-secondary-500 rounded-md">Hero</div>
              <div className="w-fit py-2 px-4 bg-secondary-500 rounded-md">Hero</div>
              <div className="w-fit py-2 px-4 bg-secondary-500 rounded-md">Hero</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

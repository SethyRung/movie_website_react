import { useState } from "react";
import MainCard from "../components/movie/main-card";
import MovieCard from "../components/movie/movie-card";
import Pagination from "../components/pagination";
import Tabs from "../components/tabs";

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
        <Pagination
          currentValue={tabs.findIndex((tab) => tab.key === currentTab) + 1}
          onCurrentValueChange={(value) => {
            const tab = tabs.find((tab, index) => index + 1 === value);
            setCurrentTab(tab && tab.key);
          }}
          total={3}
          pageCount={1}
          showIndicators={false}
          showPrev
          showNext
          ui={{
            wrapper: "gap-x-2 hidden lgMobile:flex",
            base: "w-4 h-4 w-8 h-8",
            rounded: "rounded-full first:rounded-full last:rounded-full",
          }}
        />
      </div>
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

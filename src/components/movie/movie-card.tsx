import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <div className="min-w-52 min-h-80 p-2 bg-secondary-500">
      <img
        src="/assets/Avatar-Poster.webp"
        alt="card-img"
        className="w-full h-40 mb-4 object-cover"
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-2">
          <h1 className="text-white font-redHatMono text-sm font-bold">John WicK: Chapter 4</h1>
          <div className="w-fit h-fit px-2 py-1 font-roboto text-[#FFA100] bg-[#FFA100]/10 text-xs rounded-2xl flex justify-between items-center gap-1">
            <Icon icon="mdi-star" />
            <span>4.5</span>
          </div>
        </div>
        <div className="grid grid-cols-[auto,_1fr] grid-rows-2 text-xs font-roboto gap-y-2 gap-x-3">
          <p className="text-grey-500">Release :</p>
          <p className="text-gray-400">17-02-2023</p>
          <p className="text-grey-500">Genre :</p>
          <p className="text-gray-400">Action</p>
        </div>
        <Link
          to=""
          className="w-full h-8 text-white rounded bg-primary-500 hover:bg-primary-600 transition-all flex items-center justify-center gap-2 text-xs tablet:text-base">
          <Icon icon="mdi-bookmark-box-multiple" width="16" />
          Get Tickets
        </Link>
        <Link
          to=""
          className="w-full h-8 text-white border border-primary-500 rounded bg-primary-500/15 hover:border-2 transition-all flex items-center justify-center gap-2 text-xs tablet:text-base">
          <Icon icon="mdi-eye" width="16" />
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;

import { isAxiosError } from "axios";
import axios from "../utils/axios";
import getImages, { type ResponseBody as Image } from "./movie-images.get";

type ResponseBody = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  images: {
    backdrops: Image[];
    id: number;
    logos: Image[];
    posters: Image[];
  };
};

const getMainMovie = async (): Promise<ResponseBody | undefined> => {
  try {
    const res = await axios.withApiKey.get("/movie/popular");
    const images = await getImages(res.data.results[0].id);
    return { ...res.data.results[0], images };
  } catch (error) {
    isAxiosError(error) && console.log(error.response?.data.status_message);
  }
};
export default getMainMovie;
export type { ResponseBody };

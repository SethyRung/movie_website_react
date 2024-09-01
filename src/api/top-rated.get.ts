import { isAxiosError } from "axios";
import axios from "../utils/axios";

type ResponseBody = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: {
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
  }[];
  total_pages: number;
  total_results: number;
};

const getTopRated = async (): Promise<ResponseBody | undefined> => {
  try {
    const res = await axios.withApiKey.get("/movie/top_rated?language=en-US&page=1");
    return res.data;
  } catch (error) {
    isAxiosError(error) && console.log(error.response?.data.status_message);
  }
};

export default getTopRated;
export type { ResponseBody };

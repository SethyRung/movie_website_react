import { isAxiosError } from "axios";
import axios from "../utils/axios";

type ResponseBody = {
  id: number;
  results: {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }[];
};

const getVideos = async (movie_id: number): Promise<ResponseBody | undefined> => {
  try {
    const res = await axios.withApiKey.get(`/movie/${movie_id}/videos`);
    return res.data;
  } catch (error) {
    isAxiosError(error) && console.log(error.response?.data.status_message);
  }
};

export default getVideos;
export type { ResponseBody };

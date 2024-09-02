import { isAxiosError } from "axios";
import axios from "../utils/axios";

type ResponseBody = {
  id: number;
  cast: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }[];
  crew: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
  }[];
};

const getMovieCredits = async (movie_id: number): Promise<ResponseBody | undefined> => {
  try {
    const res = await axios.withApiKey.get(`/movie/${movie_id}/credits`);
    return res.data;
  } catch (error) {
    isAxiosError(error) && console.log(error.response?.data.status_message);
  }
};

export default getMovieCredits;
export type { ResponseBody };

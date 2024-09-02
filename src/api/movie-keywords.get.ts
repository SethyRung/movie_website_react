import { isAxiosError } from "axios";
import axios from "../utils/axios";

type ResponseBody = {
  id: number;
  keywords: {
    id: number;
    name: string;
  }[];
};

const getKeywords = async (movie_id: number): Promise<ResponseBody | undefined> => {
  try {
    const res = await axios.withApiKey.get(`/movie/${movie_id}/keywords`);
    return res.data;
  } catch (error) {
    isAxiosError(error) && console.log(error.response?.data.status_message);
  }
};

export default getKeywords;
export type { ResponseBody };

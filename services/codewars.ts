import axios from "axios";
import { unstable_cache } from "next/cache";

import { CODEWARS_ACCOUNT } from "@/common/constants/codewars";

const { user_id } = CODEWARS_ACCOUNT;

const CODEWARS_ENDPOINT = `https://www.codewars.com/api/v1/users/${user_id}`;

const fetchCodewarsData = async () => {
  try {
    const response = await axios.get(CODEWARS_ENDPOINT);

    const status = response.status;
    const data = response.data;

    if (status > 400) {
      return { status, data: {} };
    }

    return { status, data };
  } catch (error: any) {
    return { status: 500, data: {} };
  }
};

const getCachedCodewarsData = unstable_cache(
  async () => fetchCodewarsData(),
  ["codewars-stats-cache-key"],
  {
    revalidate: 3600,
    tags: ["codewars-stats-tag"],
  },
);

export const getCodewarsData = async () => {
  return await getCachedCodewarsData();
};

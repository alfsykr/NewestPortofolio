import axios from "axios";
import { unstable_cache } from "next/cache";

import { MONKEYTYPE_ACCOUNT } from "@/common/constants/monkeytype";

const { username, api_key } = MONKEYTYPE_ACCOUNT;

const USER_ENDPOINT = `https://api.monkeytype.com/users/${username}/profile`;

const fetchMonkeytypeData = async () => {
  try {
    const response = await axios.get(USER_ENDPOINT, {
      headers: {
        Authorization: `ApeKey ${api_key}`,
      },
    });

    const status = response.status;
    const responseJson = response.data;

    if (status > 400) {
      return { status, data: {} };
    }

    return { status, data: responseJson.data };
  } catch (error: any) {
    return { status: 500, data: {} };
  }
};

const getCachedMonkeytypeData = unstable_cache(
  async () => fetchMonkeytypeData(),
  ["monkeytype-stats-cache-key"],
  {
    revalidate: 3600,
    tags: ["monkeytype-stats-tag"],
  },
);

export const getMonkeytypeData = async () => {
  return await getCachedMonkeytypeData();
};

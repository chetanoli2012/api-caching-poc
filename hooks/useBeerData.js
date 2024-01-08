import useSWR from "swr";
import { PUNK_API_BASE_URL } from "../constants/constants";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const useBeerData = (page) => {
  const { data, error } = useSWR(
    `${PUNK_API_BASE_URL}?page=${page}&per_page=10`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

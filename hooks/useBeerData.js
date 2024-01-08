import useSWR from "swr";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const useBeerData = (page) => {
  const { data, error } = useSWR(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

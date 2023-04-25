import swr from "swr";
import fetcher from "@/lib/fetcher";

const useFavorites = () => {
  const { data, error, isLoading, mutate } = swr("/api/favorites", fetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
  });
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
export default useFavorites;

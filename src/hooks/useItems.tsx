import useSwr from "swr";
import fetcher from "@/lib/fetcher";

const useItems = () => {
  const { data, error, isLoading, mutate } = useSwr("/api/items", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });
  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export default useItems;

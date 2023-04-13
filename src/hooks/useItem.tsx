import useSwr from "swr";
import fetcher from "@/lib/fetcher";

const useItem = (id?: string) => {
  const { data, error, isLoading } = useSwr(
    id ? `/api/item/${id}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useItem;

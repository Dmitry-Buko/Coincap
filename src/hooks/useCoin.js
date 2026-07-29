import { useQuery } from "@tanstack/react-query";
import { getCoin } from "../services/coinsFunc";

export const useCoin = (id) => {
  return useQuery({
    queryKey: ["coins", id],
    queryFn: () => getCoin(id),
    enabled: !!id,
    staleTime: 10 * 1000,
    refetchInterval: 10 * 1000,
  });
};

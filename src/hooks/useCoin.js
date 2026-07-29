import { useQuery } from "@tanstack/react-query";
import { getCoin } from "../services/coinsFunc";

export const useCoin = (id) => {
  return useQuery({
    queryKey: ["coins", id],
    queryFn: () => getCoin(),
    enabled: !!id,
    staleTime: 60 * 1000,
    refetchInterval: 60 * 1000,
  });
};

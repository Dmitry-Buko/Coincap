import { useQuery } from "@tanstack/react-query";
import { getCoins } from "../services/coinsFunc";

export const useCoins = () => {
  return useQuery({
    queryKey: ["coins"],
    queryFn: () => getCoins(),
    staleTime: 60 * 1000,
    refetchInterval: 60 * 1000,
  });
};

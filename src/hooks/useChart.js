import { useQuery } from "@tanstack/react-query";
import { getChart } from "../services/coinsFunc";

export const useChart = (id) => {
  return useQuery({
    queryKey: ["chart", id],
    queryFn: () => getChart(id),
    enabled: !!id,
    staleTime: 10 * 1000,
    refetchInterval: 10 * 1000,
  });
};

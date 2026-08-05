export const prepareChartData = (prices) => {
  const chartData = prices?.map(([timestamp, price]) => ({
    date: new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    price,
  }));
  const firstPrice = chartData[0].price;
  const lastPrice = chartData[chartData.length - 1].price;
  const percentChange = ((lastPrice - firstPrice) / firstPrice) * 100;
  const chartColor = percentChange >= 0 ? "#16a34a" : "#dc2626";
  const formattedChange = `${percentChange > 0 ? "+" : ""}${percentChange.toFixed(2)}%`;

  return { chartData, percentChange, chartColor, formattedChange };
};

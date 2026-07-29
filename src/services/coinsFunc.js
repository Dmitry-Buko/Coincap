import coingeckoAPI from "./coingeckoAPI";

export const getCoins = async (page = 1) => {
  const { data } = await coingeckoAPI.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      per_page: 20,
      page,
      sparkline: true,
    },
  });
  // console.log("data:::", data);//============УДАЛИТЬ
  return data;
};

export const getCoin = async (id) => {
  const { data } = await coingeckoAPI.get(`/coins/${id}`, {
    params: {
      localization: false,
      tickers: false,
      market_data: true,
      community_data: false,
      developer_data: false,
      sparkline: true,
    },
  });
  console.log("data2:::", data);//============УДАЛИТЬ
  return data;
};
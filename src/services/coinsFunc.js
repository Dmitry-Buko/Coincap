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
  // console.log("getCoins:::", data);//============УДАЛИТЬ
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
  // console.log("getCoin:::", data);//============УДАЛИТЬ
  return data;
};

export const getChart = async (id) =>{
  const {data} = await coingeckoAPI.get(`/coins/${id}/market_chart`,{
    params: {
      vs_currency: "usd",
      days: 7,
    }
  })
  // console.log("getChart:::", data);//============УДАЛИТЬ
  return data;
}
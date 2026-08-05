import StatCard from "./StatCard";

import { formatCompact, formatPrice } from "../../utils/formatNumber";
import BuyCoinForm from "./ByuCoinForm";

const CoinStats = ({ coin }) => {
  const market = coin.market_data;
  const buyCoin = {
    id: coin.id,
    name: coin.name,
    price: market.current_price.usd,
  };
  const handleBuy = () => {
    //dispatch(addCoin)
  };
  return (
    <div className="grid grid-cols-1 gap-1 lg:grid-cols-3">
      <section className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-3">
        <StatCard label="Price" value={formatPrice(market.current_price.usd)} />

        <StatCard
          label="Market Cap"
          value={formatCompact(market.market_cap.usd)}
        />

        <StatCard
          label="Volume (24h)"
          value={formatCompact(market.total_volume.usd)}
        />

        <StatCard
          label="Circulating Supply"
          value={formatCompact(market.circulating_supply)}
        />

        <StatCard
          label="Total Supply"
          value={market.total_supply ? formatCompact(market.total_supply) : "∞"}
        />

        <StatCard
          label="24h Change"
          value={`${market.price_change_percentage_24h.toFixed(2)}%`}
          className={
            market.price_change_percentage_24h >= 0
              ? "text-green-600"
              : "text-red-500"
          }
        />
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-1">
        <h2 className="mb-4 text-lg font-semibold">Buy {coin.name}</h2>
        <BuyCoinForm coin={buyCoin} onBuy={handleBuy} />
      </section>
    </div>
  );
};

export default CoinStats;

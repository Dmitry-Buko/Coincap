import StatCard from "./StatCard";

import { formatCompact, formatPrice } from "../../utils/formatNumber";

const CoinStats = ({ coin }) => {
  const market = coin.market_data;

  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
  );
};

export default CoinStats;

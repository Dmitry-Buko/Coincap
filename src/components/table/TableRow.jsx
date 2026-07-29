import { FiPlus } from "react-icons/fi";
import { formatCompact, formatPrice } from "../../utils/formatNumber";
import { useNavigate } from "react-router-dom";

const TableRow = ({ coin, onBuy }) => {
  const navigate = useNavigate();
  
  return (
    <tr
      onClick={() => navigate(`/coin/${coin.id}`)}
      className="cursor-pointer border-b border-gray-100 transition hover:bg-gray-50"
    >
      <td className="py-4 text-center">{coin.market_cap_rank}</td>

      <td>
        <img src={coin.image} alt={coin.name} className="mx-auto h-10 w-10" />
      </td>

      <td>
        <div>
          <p className="font-semibold">{coin.name}</p>

          <p className="text-sm uppercase text-gray-500">{coin.symbol}</p>
        </div>
      </td>

      <td className="text-center">{formatPrice(coin.total_volume)}</td>

      <td
        className={`text-center font-semibold ${
          coin.price_change_24h >= 0 ? "text-green-600" : "text-red-500"
        }`}
      >
        {coin.price_change_24h > 0 ? "+" : ""}
        {coin.price_change_24h?.toFixed(2)}$
      </td>

      <td className="text-center">{formatCompact(coin.market_cap)}</td>

      <td className="text-center font-semibold">{formatPrice(coin.current_price)}</td>

      <td className="text-center">
        <button
          className="rounded-lg p-2 transition hover:bg-indigo-100"
          onClick={(e) => {
            e.stopPropagation();
            onBuy(coin);
          }}
        >
          <FiPlus className="text-indigo-600" size={20} />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;

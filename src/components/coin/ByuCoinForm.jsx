import { useState } from "react";
import { formatPrice } from "../../utils/formatNumber";
import { useDispatch } from "react-redux";
import { addCoin } from "../../features/portfolio/portfolioSlice";

const BuyCoinForm = ({ coin, onCancel }) => {
  const [amount, setAmount] = useState("");
  const coinPrice = coin.current_price || coin.price
  const total = Number(amount || 0) * coinPrice;
  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(addCoin({
      id: coin.id,
      symbol: coin.symbol,
      image: coin.image,
      qtt: Number(amount),
      purchasePrise: total,
    }));
    setAmount("");
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium">Amount</label>
        <input
          type="number"
          min="0"
          step="0.000001"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
        />
      </div>

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="mb-2 flex justify-between">
          <span>Current price</span>
          <strong>{formatPrice(coinPrice)}</strong>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        {onCancel && (
          <button onClick={onCancel} className="rounded-lg border px-5 py-2">
            Cancel
          </button>
        )}
        <button
          onClick={handleBuy}
          className="rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default BuyCoinForm;
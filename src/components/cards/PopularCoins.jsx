import { useCoins } from "../../hooks/useCoins";

const PopularCoins = () => {
  const { data } = useCoins();
  
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Popular Coins
      </h2>

      <div className="flex gap-4">
        {data?.slice(0, 3).map((coin) => (
          <div
            key={coin.id}
            className="flex flex-1 items-center gap-3 rounded-lg border border-gray-100 p-4 transition hover:border-indigo-500"
          >
            <img
              src={coin.image}
              alt={coin.name}
              className="h-10 w-10"
            />

            <div>
              <p className="font-semibold">{(coin.symbol).toUpperCase()}</p>

              <p className="text-sm text-gray-500">
                {coin.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCoins;
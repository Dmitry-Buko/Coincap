import { useState } from "react";
import { useCoins } from "../../hooks/useCoins";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import BuyCoinModal from "../ui/BuyCoinModal";

const CoinsTable = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const { data, isLoading, isError, error } = useCoins();

  const openModal = (coin) => {
    setSelectedCoin(coin);
  };
  const closeModal = () => {
    setSelectedCoin(null);
  };

  if (isLoading) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center text-red-500">
        {error.message}
      </div>
    );
  }

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
        <table className="w-full">
          <TableHeader />

          <tbody>
            {data?.map((coin) => (
              <TableRow key={coin.id} coin={coin} onBuy={openModal} />
            ))}
          </tbody>
        </table>
      </div>

      <BuyCoinModal
        coin={selectedCoin}
        isOpen={!!selectedCoin}
        onClose={closeModal}
      />
    </>
  );
};

export default CoinsTable;

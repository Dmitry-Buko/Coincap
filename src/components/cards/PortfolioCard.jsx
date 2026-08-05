const PortfolioCard = () => {
  return (
    <button className="w-72 rounded-xl border border-indigo-200 bg-indigo-50 p-6 text-left transition hover:bg-indigo-100">
      <p className="text-sm text-gray-500">Portfolio</p>

      <h2 className="mt-2 text-3xl font-bold">$0.00</h2>{/* тут все меняем */}

      <p className="mt-2 text-sm text-gray-500">Click to view your assets</p>
    </button>
  );
};

export default PortfolioCard;

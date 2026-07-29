const TableHeader = () => {
  return (
    <thead className="bg-gray-50">
      <tr className="border-b border-gray-200">
        <th className="w-16 py-4 text-center">#</th>
        <th className="w-20"></th>
        <th className="text-center">Name</th>
        <th className="text-center">Volume (24h)</th>
        <th className="text-center">Change (24h)</th>
        <th className="text-center">Market Cap</th>
        <th className="text-center">Price</th>
        <th className="w-14"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;

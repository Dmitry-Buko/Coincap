const StatCard = ({ label, value, className = "" }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <p className="text-xs text-gray-500">{label}</p>

      <h2 className={`mt-1.5 text-lg font-semibold ${className}`}>{value}</h2>
    </div>
  );
};

export default StatCard;

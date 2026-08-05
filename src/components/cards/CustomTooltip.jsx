export const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
      <p className="text-sm text-gray-500">{label}</p>

      <p className="mt-1 text-lg font-semibold">
        $
        {payload[0].value.toLocaleString("en-US", {
          maximumFractionDigits: 2,
        })}
      </p>
    </div>
  );
};

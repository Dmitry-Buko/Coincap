import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { CartesianGrid } from "recharts";
import { useChart } from "../../hooks/useChart";
import { CustomTooltip } from "../cards/CustomTooltip";
import { prepareChartData } from "../../utils/chart";

const CoinChart = ({ id }) => {
  const { data, isLoading, isError } = useChart(id);

  if (isLoading) {
    return (
      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        Loading chart...
      </section>
    );
  }

  if (isError) {
    return (
      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        Error loading chart.
      </section>
    );
  }
    
  const { chartData, percentChange, chartColor, formattedChange } =
    prepareChartData(data?.prices);

  return (
    <section className="mt-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Price History (7 Days)</h2>

        <span
          className={`font-semibold ${
            percentChange >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {formattedChange}
        </span>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid vertical={false} stroke="#F3F4F6" />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              minTickGap={40}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              tickFormatter={(value) =>
                `$${Math.round(value).toLocaleString()}`
              }
            />

            <Tooltip content={<CustomTooltip />} cursor={false} />

            <Line
              type="monotone"
              dataKey="price"
              stroke={chartColor}
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5,
              }}
              animationDuration={800}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default CoinChart;

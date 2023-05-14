import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import Export from "./Export";
import "./Chart.css";
function Chart({ histogramData, setHistogramData }) {
  if (!histogramData || histogramData.length === 0) {
    return <div>No data to display</div>;
  }
  const handleReset = () => {
    setHistogramData([]);
  };
  return (
    <div className="chart-area">
      <ResponsiveContainer>
        <BarChart
          width={1400}
          height={400}
          data={histogramData}
          margin={{ top: 25, right: 20, bottom: 20, left: 0 }}
        >
          <XAxis dataKey="word" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF7396" />
        </BarChart>
      </ResponsiveContainer>
      <div className="export-data">
        <Export histogramData={histogramData} />
        <button onClick={handleReset}>Reset</button>
      </div>
      <p className="description">Histogram Of 20 Most Occuring Words</p>
    </div>
  );
}
export default Chart;

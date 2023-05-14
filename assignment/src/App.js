import "./App.css";
import { useState } from "react";
import Chart from "./components/Chart";

function App() {
  const [histogramData, setHistogramData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://www.terriblytinytales.com/test.txt");
    const text = await response.text();

    const words = text.toLowerCase().match(/\b\w+\b/g);
    const frequency = {};
    words.forEach((word) => {
      frequency[word] = frequency[word] || 0;
      frequency[word]++;
    });

    const histogramData = Object.entries(frequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([word, count]) => ({ word, count }));
    setHistogramData(histogramData);
  };

  return (
    <div className="app">
      <h1>Click on Submit button to display the chart</h1>
      <div className="submit">
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="chart">
        <Chart
          histogramData={histogramData}
          setHistogramData={setHistogramData}
        />
      </div>
    </div>
  );
}
export default App;

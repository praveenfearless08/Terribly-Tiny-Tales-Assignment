import { saveAs } from "file-saver";
import "./Chart.css";
function Export({ histogramData }) {
  if (!histogramData || histogramData.length === 0) {
    alert("No data to display");
  }
  const handleExport = () => {
    const csvData = histogramData
      .map(({ word, count }) => `${word},${count}`)
      .join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "histogram.csv");
  };

  return <button onClick={handleExport}>Export</button>;
}
export default Export;

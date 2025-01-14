import './App.css';
import { useState } from "react";

function App() {
  const [conversionType, setConversionType] = useState("FtoC");
  const [temperature, setTemperature] = useState("");
  const [result, setResult] = useState(null);

  function handleConversion(temp, type) {
    let convertedTemp;
    if (type === "FtoC") {
      convertedTemp = ((temp - 32) * 5) / 9;
    } else if (type === "CtoF") {
      convertedTemp = (temp * 9) / 5 + 32;
    }
    setResult(convertedTemp.toFixed(0));
  }

  function handleTemperatureChange(e) {
    const temp = e.target.value;
    setTemperature(temp);
    handleConversion(temp, conversionType);
  }

  function handleConversionTypeChange(e) {
    const type = e.target.value;
    setConversionType(type);
    handleConversion(temperature, type);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Temperature Converter</h1>
      </header>
      <div>
        <select
          value={conversionType}
          onChange={handleConversionTypeChange} 
        >
          <option value="FtoC">Fahrenheit to Celsius</option>
          <option value="CtoF">Celsius to Fahrenheit</option>
        </select>
      </div>
      <input
        type="number"
        placeholder="Enter a number"
        value={temperature}
        onChange={handleTemperatureChange} 
      ></input>
      {result !== null && (
        <p>
          {temperature}° {conversionType === "FtoC" ? "Fahrenheit" : "Celsius"}{" "}
          converted is {result}°{" "}
          {conversionType === "FtoC" ? "Celsius" : "Fahrenheit"}
        </p>
      )}
    </div>
  );
}

export default App;

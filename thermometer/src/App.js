import './App.css';
import {useState} from "react"

function App() {
  const [conversionType, setConversionType] = useState("FtoC")
  const [temperature, setTemperature] = useState("")
  const [result, setResult] = useState(null)

  function handleConversion(e) {
    e.preventDefault()
    let convertedTemp;
    if (conversionType === "FtoC") {
      convertedTemp = ((temperature - 32) * 5 / 9).toFixed(0)
    }
    else if (conversionType === "CtoF") {
      convertedTemp = ((temperature * 9 / 5) + 32).toFixed(0)
    }
    setResult(convertedTemp)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Temperature Converter</h1>
      </header>
      <div>
        <select value={conversionType} onChange={(e) => {setConversionType(e.target.value)}}>
          <option value="FtoC">Fahrenheit to Celsius</option>
          <option value="CtoF">Celsius to Fahrenheit</option>
        </select>
      </div>
        <input type="number" placeholder="Enter a number" value={temperature} onChange={(e) => {setTemperature(e.target.value)}}></input>
        <button onClick={handleConversion}>Convert Temperature</button>
        {result !== null && ( <p> {temperature}° {conversionType === "FtoC" ? "Fahrenheit" : "Celsius"}{" "} is {result}°{" "} {conversionType === "FtoC" ? "Celsius" : "Fahrenheit"} </p> )}

    </div>
  );
}

export default App;

// import './App.css';
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
      convertedTemp = ((temperature - 32) * 5 / 9).toFixed(0)
    }
    setResult(convertedTemp)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Temperature Converter</h1>
      </header>
      <select>
        <option value="FtoC">Fahrenheit to Celsius</option>
        <option value="CtoF">Celsius to Fahrenheit</option>
      </select>
      <input type="number" placeholder="Enter a number"></input>
    </div>
  );
}

export default App;

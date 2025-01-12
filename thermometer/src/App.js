// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Temperature Converter</h1>
      </header>
      <select>
        <option value="FtoC">Fahrenheit to Celsius</option>
        <option value="CtoF">Celsius to Fahrenheit</option>
      </select>
      <input placeholder="Enter a number"></input>
    </div>
  );
}

export default App;

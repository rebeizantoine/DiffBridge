import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
        <title>Bridging Brushes</title>
      </div>
    </div>
  );
}

export default App;

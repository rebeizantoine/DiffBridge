import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section1 from "./Components/Section1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
        <Section1 />
        <title>Bridging Brushes</title>
      </div>
    </div>
  );
}

export default App;

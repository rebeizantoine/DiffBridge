import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Section1 from './Components/Section1';

function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <Section1/>
      <title>Bridging Brushes</title>
      </div>
    </div>
  );
}

export default App;

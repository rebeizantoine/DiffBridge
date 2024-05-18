import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Artists from "./Components/Artists";
import New from "./Components/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Section1 />
                <Section2 />
                <New />
                <title>Bridging Brushes</title>
              </>
            }
          />
          <Route
            path="/artists"
            element={
              <>
                <Header />
                <Artists />
              </>
            }
          />
        </Routes>
      </Router>
      <div></div>
    </div>
  );
}

export default App;

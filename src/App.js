import "./App.css";
import "./Styles/animations.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Artists from "./Components/Artists";
import New from "./Components/New";
import SingleArtist from "./Components/SingleArtist";
import Footer from "./Components/Footer";
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
                <Footer />

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
          <Route
            path="/single"
            element={
              <>
                <Header />
                <SingleArtist />
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

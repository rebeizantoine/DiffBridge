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
import Exhibition from "./Components/Exhibition";
import Counter from "./Components/Counter";
import RealFooter from "./Components/RealFooter";
import EventsandPrograms from "./Components/EventsandPrograms";
import Gallery from "./Components/Gallery";
import SingleExhebition from "./Components/SingleExhebition";
import Hero2 from "./Components/Hero2";

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
                <Hero2 />
                <Section1 />
                <Section2 />
                {/* <New /> */}
                <Gallery />
                <EventsandPrograms />
                <Counter />
                {/* <Footer /> */}
                <RealFooter />
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

                <RealFooter />
              </>
            }
          />
          <Route
            path="/exhibition"
            element={
              <>
                <Header />
                <Exhibition />
              </>
            }
          />
          <Route
            path="/singleex"
            element={
              <>
                <Header />
                <SingleExhebition />
                <Footer />
              </>
            }
          />
          <Route
            path="/exhibition123"
            element={
              <>
                <Header />
                <EventsandPrograms />
              </>
            }
          />
          <Route
            path="/gallery123"
            element={
              <>
                <Header />
                <Gallery />
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

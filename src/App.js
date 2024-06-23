import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import KeyFeatures from "./pages/KeyFeatures";
import Calculate from "./pages/Calculate";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keyfeatures" element={<KeyFeatures />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
}
export default App;

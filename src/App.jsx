import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from  "./pages/Home";
import Seasons from "./pages/Seasons";
import Episodes from "./pages/Episodes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seasons" element={<Seasons />} />
        <Route path="/seasons/:id" element={<Episodes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      
    </Router>
  )
}

export default App;

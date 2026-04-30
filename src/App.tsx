import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import AnimalProfile from "./pages/AnimalProfile";
import Donate from "./pages/Donate";
import Journeys from "./pages/Journeys";
import Volunteer from "./pages/Volunteer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Documents from "./pages/Documents";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/animals/:id" element={<AnimalProfile />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
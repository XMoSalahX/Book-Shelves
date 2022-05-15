import "./App.css";
import Home from "./Componant/pages/home";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./Componant/pages/SearchPage";

// Main Functions
function App() {
  return (
    // Routes to shift from componant to anthor
    <Routes>
      {/* To Home Componant */}
      <Route path="/" element={<Home />} />
      {/* To Search page Componant */}
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;

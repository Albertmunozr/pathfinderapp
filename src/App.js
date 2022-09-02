import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Personaje from "./components/Personaje";
import Error404 from "./components/Error404";

const navbarLinks = [
  { url: "/", title: "Spells" },
  { url: "/spells", title: "By Level" },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar navbarLinks={navbarLinks} />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="spell/:id" element={<Personaje />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

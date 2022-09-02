import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import Error404 from "./components/Error404";

const navbarLinks = [
  { url: "/", title: "Spells" },
  { url: "/bylevel", title: "By Level" },
  { url: "/byclass", title: "By Class" },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar navbarLinks={navbarLinks} />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="spell/:id" element={<Detail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

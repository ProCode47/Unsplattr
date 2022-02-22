import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

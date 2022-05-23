import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindCars from "./pages/FindCars";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<FindCars />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

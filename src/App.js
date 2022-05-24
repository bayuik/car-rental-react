import { Home, FindCars } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

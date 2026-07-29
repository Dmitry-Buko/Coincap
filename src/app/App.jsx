import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CoinDetail from "../pages/CoinDetail";
import MainLayout from "../layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

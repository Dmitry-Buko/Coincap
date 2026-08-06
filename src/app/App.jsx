import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
import CoinDetail from "../pages/CoinDetail";
import MainLayout from "../layouts/MainLayout";
import CoinsTable from "../components/table/CoinsTable";
import Container from "../components/layout/Container";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <Container>
                <CoinsTable />
              </Container>
            }
          />
          <Route path="/coin/:id" element={<CoinDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

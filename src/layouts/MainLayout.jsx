import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="py-1">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;

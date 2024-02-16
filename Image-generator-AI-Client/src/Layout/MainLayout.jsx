import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

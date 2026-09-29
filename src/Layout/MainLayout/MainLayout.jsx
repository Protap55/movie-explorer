import { Outlet } from "react-router";
import NavBar from "../../Component/NavBar/NavBar";
import Footer from "../../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <NavBar></NavBar>
        <div className="py-3">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;

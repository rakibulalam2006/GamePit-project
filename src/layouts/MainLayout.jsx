import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
      <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
        <Navbar></Navbar>
        <main className="flex-1">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
};

export default MainLayout;
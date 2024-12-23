import { Outlet } from "react-router-dom";
import Header from "../components/Header/index";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
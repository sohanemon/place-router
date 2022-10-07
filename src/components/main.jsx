import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <br />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Main;

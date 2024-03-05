import { Outlet } from "react-router-dom";
import { Header } from "../components";

export const MainLayout = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

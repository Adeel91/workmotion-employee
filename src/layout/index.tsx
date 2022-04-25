import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { BottomNotification } from "../components/bottomNotification";
import { Header } from "../components/header";
import "./Layout.css";

const Layout: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <div className="mainStyle">
        <Outlet />
      </div>
      <BottomNotification />
    </Fragment>
  );
};

export default Layout;

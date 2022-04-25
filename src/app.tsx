import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const WorkMotion: React.FC = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default WorkMotion;

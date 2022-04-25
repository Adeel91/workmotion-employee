import React from "react";
import "./BottomNotification.css";

const BottomNotification: React.FC = (): JSX.Element => {
  return (
    <div className="content">
      {`💥💥 Thank you for running the app with mock data 💥💥` as string}
    </div>
  );
};

export default BottomNotification;

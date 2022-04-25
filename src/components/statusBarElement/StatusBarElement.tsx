import React from "react";
import { Status } from "../../config/Status";
import { StatusBarElementProps } from "./StatusBarElement.types";

const StatusBarElement = ({
  userStatus,
  targetStatus,
  onChangeStatus,
}: StatusBarElementProps) => {
  const onChangeStatusHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeStatus(targetStatus);
  };

  return (
    <li>
      <a
        href="/#"
        className={userStatus === targetStatus ? "active" : ("" as string)}
        onClick={(e) => onChangeStatusHandler(e)}
      >
        {Status[targetStatus]}
      </a>
    </li>
  );
};
export default StatusBarElement;

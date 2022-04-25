import React, { Fragment } from "react";
import { StatusBarElement } from "../statusBarElement";
import { Status, statusValues } from "../../config/Status";
import { StatusBarTypes } from "./StatusBar.types";
import "./StatusBar.css";

const StatusBar = ({
  userStatus,
  onChangeStatus,
}: StatusBarTypes): JSX.Element => (
  <Fragment>
    <ul className="breadcrumb">
      {statusValues.map((value: string) => (
        <StatusBarElement
          key={value as string}
          userStatus={userStatus}
          targetStatus={Status[value as keyof typeof Status]}
          onChangeStatus={onChangeStatus}
        />
      ))}
    </ul>
  </Fragment>
);

export default StatusBar;

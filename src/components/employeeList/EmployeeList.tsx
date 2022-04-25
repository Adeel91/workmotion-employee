import React from "react";
import { EmployeeItem } from "../employeeItem";
import { EmployeesPropType } from "./EmployeeList.types";
import { EmployeeType } from "../employeeItem/EmployeeItem.types";

const EmployeeList = ({ employees }: EmployeesPropType): JSX.Element => {
  return (
    <>
      {employees.map((employee: EmployeeType) => (
        <EmployeeItem key={employee.id as number} employee={employee} />
      ))}
    </>
  );
};

export default EmployeeList;

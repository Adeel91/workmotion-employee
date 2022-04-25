import React from "react";
import { Button } from "react-bootstrap";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { CreateEmployeeSwal } from "../../config/SweetAlert";
import { DashboardEmployeeType } from "../../views/dashboard.types";
import { NewEmployeeTypes } from "./NewEmployee.types";

const CreateEmployeeSwalContent = withReactContent(Swal);

const NewEmployee = ({ createEmployee }: NewEmployeeTypes) => {
  const onCreateEmployeeHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    const createNewEmployee = async (): Promise<void> => {
      const swalVal = await CreateEmployeeSwalContent.fire(CreateEmployeeSwal);
      let v = (swalVal && swalVal.value) || swalVal.dismiss;

      if ((v && v.name && v.location && v.department) || v === "cancel") {
        if (v !== "cancel") {
          const payload: DashboardEmployeeType = {
            name: v.name as string,
            location: v.location as string,
            department: v.department as string,
            status: 0 as number,
          };

          createEmployee(payload);
        }
      } else {
        // @ts-ignore
        await CreateEmployeeSwalContent.fire({
          title: "All fields are required!!" as string,
        });
        await createNewEmployee();
      }
    };

    await createNewEmployee();
  };

  return (
    <div className="right-aligned">
      <Button variant="primary" onClick={onCreateEmployeeHandler}>
        Add new Employee
      </Button>
    </div>
  );
};

export default NewEmployee;

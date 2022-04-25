import { EmployeeType } from "../../components/employeeItem/EmployeeItem.types";
import { SagaReturnType } from "redux-saga/effects";
import {
  getEmployees,
  patchEmployee,
  postEmployee,
} from "../services/employees";
import { PATCH_EMPLOYEE, POST_EMPLOYEE } from "../actionTypes";
import { Status } from "../../config/Status";

export type GetEmployeesResponseType = SagaReturnType<typeof getEmployees>;
export type PostEmployeeResponseType = SagaReturnType<typeof postEmployee>;
export type PatchEmployeeResponseType = SagaReturnType<typeof patchEmployee>;

export interface IActionPostEmployees {
  type: typeof POST_EMPLOYEE;
  employee_data: EmployeeType;
}

export interface IActionPatchEmployee {
  type: typeof PATCH_EMPLOYEE;
  employee_id: number;
  status: Status;
}

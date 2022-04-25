import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_FAIL,
  GET_EMPLOYEES_SUCCESS,
  PATCH_EMPLOYEE,
  POST_EMPLOYEE,
  POST_EMPLOYEE_FAIL,
  POST_EMPLOYEE_SUCCESS,
} from "../actionTypes";
import { EmployeeType } from "../../components/employeeItem/EmployeeItem.types";
import { DashboardEmployeeType } from "../../views/dashboard.types";

export const getEmployees = () => {
  return {
    type: GET_EMPLOYEES,
  };
};

export const getEmployeesSuccess = (employees: EmployeeType[]) => {
  return {
    type: GET_EMPLOYEES_SUCCESS,
    payload: employees,
  };
};

export const getEmployeesFail = (error: any) => {
  return {
    type: GET_EMPLOYEES_FAIL,
    payload: error,
  };
};

export const patchEmployee = (id: number, status: number) => {
  return {
    type: PATCH_EMPLOYEE,
    employee_id: id,
    status: status,
  };
};

export const postEmployee = (data: DashboardEmployeeType) => {
  return {
    type: POST_EMPLOYEE,
    employee_data: data,
  };
};

export const postEmployeeSuccess = (employee: EmployeeType) => {
  return {
    type: POST_EMPLOYEE_SUCCESS,
    payload: employee,
  };
};

export const postEmployeeFail = (error: any) => {
  return {
    type: POST_EMPLOYEE_FAIL,
    payload: error,
  };
};

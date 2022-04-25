import { EmployeeType } from "../../components/employeeItem/EmployeeItem.types";

export type EmployeeStateType = {
  data: EmployeeType[];
  employee_id: number | null;
  status: number;
  loading: boolean;
  error: any;
  employee_data: EmployeeType;
};

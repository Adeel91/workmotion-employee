import { Status } from "../../config/Status";

export type EmployeeItemType = {
  employee: EmployeeType;
};

export type EmployeeType = {
  id: number;
  name: string;
  location: string;
  department: string;
  status: Status;
};

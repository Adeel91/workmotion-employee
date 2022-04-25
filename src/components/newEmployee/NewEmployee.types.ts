import { DashboardEmployeeType } from "../../views/dashboard.types";

export type NewEmployeeTypes = {
  createEmployee: (payload: DashboardEmployeeType) => void;
};

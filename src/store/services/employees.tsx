import { get, patch, post } from "../../api/restClient";
import * as url from "../../api/apiUrl";

export const getEmployees = () => get(url.GET_EMPLOYEES);

export const patchEmployee = (employee_id: number, status: number) =>
  patch(`${url.PATCH_EMPLOYEE}/${employee_id}`, { status: status });

export const postEmployee = (dataset: any) =>
  post(`${url.POST_EMPLOYEE}`, dataset);

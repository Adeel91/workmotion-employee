import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { DashboardEmployeeType } from "../views/dashboard.types";
import { EmployeeType } from "../components/employeeItem/EmployeeItem.types";

const REACT_APP_BASE_URL: string | undefined = process.env.REACT_APP_BASE_URL;

const axiosApi = axios.create({
  baseURL: REACT_APP_BASE_URL as string,
});

axios.interceptors.request.use(function (config: AxiosRequestConfig) {
  return config;
});

axiosApi.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error)
);

export async function get(url: string) {
  return await axiosApi
    .get<EmployeeType[]>(url)
    .then((response: AxiosResponse) => response.data);
}

export async function patch(url: string, dataset: { status: number }) {
  return await axiosApi
    .patch<EmployeeType>(url, dataset)
    .then((response: AxiosResponse) => response.data);
}

export async function post(url: string, dataset: DashboardEmployeeType) {
  return await axiosApi
    .post<EmployeeType>(url, dataset)
    .then((response: AxiosResponse) => response.data);
}

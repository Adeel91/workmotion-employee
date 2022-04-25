import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_FAIL,
  GET_EMPLOYEES_SUCCESS,
  PATCH_EMPLOYEE,
  POST_EMPLOYEE,
  POST_EMPLOYEE_FAIL,
  POST_EMPLOYEE_SUCCESS,
} from "../actionTypes";
import { AnyAction } from "redux";
import { EmployeeStateType } from "./reducers.types";

const initialState: EmployeeStateType = {
  data: [],
  loading: false,
  error: "",
  employee_id: null,
  status: 0,
  employee_data: [],
};

const EmployeesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return { ...state, loading: true };
    case GET_EMPLOYEES_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case GET_EMPLOYEES_FAIL:
      return { ...state, error: action.payload, loading: false };

    case PATCH_EMPLOYEE:
      return {
        ...state,
        employee_id: action.employee_id,
        status: action.status,
      };

    case POST_EMPLOYEE:
      return { ...state, loading: true };
    case POST_EMPLOYEE_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    case POST_EMPLOYEE_FAIL:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
};

export default EmployeesReducer;

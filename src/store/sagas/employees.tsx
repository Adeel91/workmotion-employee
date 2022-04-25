import { Effect, takeLatest, call, put } from "redux-saga/effects";

import {
  getEmployees,
  patchEmployee,
  postEmployee,
} from "../services/employees";

import {
  getEmployeesFail,
  getEmployeesSuccess,
  postEmployeeFail,
  postEmployeeSuccess,
} from "../actions/employees";
import { GET_EMPLOYEES, POST_EMPLOYEE, PATCH_EMPLOYEE } from "../actionTypes";
import {
  IActionPatchEmployee,
  IActionPostEmployees,
  GetEmployeesResponseType,
  PatchEmployeeResponseType,
  PostEmployeeResponseType,
} from "./sagas.types";

function* onGetEmployees(): Generator<Effect> {
  try {
    const response: GetEmployeesResponseType = yield call(getEmployees);
    yield put(getEmployeesSuccess(response));
  } catch (error: any) {
    yield put(getEmployeesFail(error.response));
  }
}

function* onPostEmployee(action: IActionPostEmployees): Generator<Effect> {
  try {
    const response: PostEmployeeResponseType = yield call(
      postEmployee,
      action.employee_data
    );
    yield put(postEmployeeSuccess(response));
  } catch (error: any) {
    yield put(postEmployeeFail(error.response));
  }
}

function* onPatchEmployee(action: IActionPatchEmployee): Generator<Effect> {
  try {
    yield call(
      patchEmployee,
      action.employee_id,
      action.status
    ) as PatchEmployeeResponseType;
  } catch (error: any) {
    yield put(getEmployeesFail(error.response));
  }
}

function* EmployeesSaga() {
  yield takeLatest(GET_EMPLOYEES, onGetEmployees);
  yield takeLatest(POST_EMPLOYEE, onPostEmployee);
  yield takeLatest(PATCH_EMPLOYEE, onPatchEmployee);
}

export default EmployeesSaga;

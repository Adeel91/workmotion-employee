import { all, fork } from "redux-saga/effects";

import EmployeesSaga from "./employees";

export default function* rootSaga() {
  yield all([fork(EmployeesSaga)]);
}

import { all } from "redux-saga/effects";
import CargoSaga from "./CargoSaga";
import UserSaga from "./UserSaga";

function* rootSaga() {
  yield all([
    CargoSaga(),
    UserSaga()
  ]);
}

export default rootSaga;
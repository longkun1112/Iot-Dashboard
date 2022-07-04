import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
// import {getAllRecruit} from "./getAllRecruit.js";

import * as types from '../Types/CargoType'
import * as actions from '../actions/CargoAction'

import axios from "axios";
function* getAllCargo() {
  try {
    const result = yield call(async () => {
      return await axios.get("http://localhost:8000/cargoes")
    });
    console.log("result", result)

    if (result ) {
      yield put({ type: "GET_ALL_CARGO_SUCCESS", payload: result.data });
    } else {
      yield put({ type: "GET_ALL_CARGO_FAILURE" });
    }
  } catch (error) {
    yield put({
      type: "GET_ALL_CARGO_FAILURE",
      payload: error.response.message,
    });
  }
}

function* addCargo({ data }) {
  try {
      const task = yield call(async () => {
        return await axios.post("http://localhost:8000/cargoes", data)
      })
      yield put(actions.taskAddedAction(task))
  } catch (e) {
      yield put(
        console.log('err', e)
      )
  }
}

function* editCargo({ id, data }) {
  try {
      const task = yield call(async () => {
        return await axios.put(`http://localhost:8000/cargoes/${id}`, data)
      })
      yield put(actions.taskEditedAction(task))
  } catch (e) {
      yield put(
        console.log('err', e)
      )
  }
}

function* deleteCargo({ id }) {
  try {
      yield call(async () => {
        return await axios.delete(`http://localhost:8000/cargoes/${id}`)
      })
      yield put(actions.taskDeletedAction(id))
      // yield put(actions.loadTasksAction())
  } catch (e) {
      yield put(
        console.log('err', e)
      )
  }
}

function* watchAddTask() {
  yield takeEvery(types.ADD_TASK, addCargo)
}

function* watchDeleteTask() {
  yield takeEvery(types.DELETE_TASK, deleteCargo)
}


function* CargoSaga() {
  yield all([
    takeLatest("GET_ALL_CARGO", getAllCargo),
    watchAddTask(),
    watchDeleteTask()
  ])
}

export default CargoSaga;
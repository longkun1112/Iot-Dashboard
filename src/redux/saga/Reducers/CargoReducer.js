import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import { TASK_ADDED, TASK_DELETED, TASKS_LOADED, TASKS_EDITED } from '../Types/CargoType'

const initState = {
  isError: false,
  errorMessage: "",
  dataCargo: [],
  isLoading: false
};

const CargoReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_CARGO":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_ALL_CARGO_SUCCESS":
      return {
        ...state,
        isLoading: false,
        dataCargo: action.payload,
      };
    case "GET_ALL_CARGO_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case TASK_ADDED:
        return {
          ...state,
          dataCargo: [...state.dataCargo, action.task]
      }
      case TASKS_EDITED:
        return {
          ...state,
          dataCargo: [...state.dataCargo, action.task]
        }
      case TASK_DELETED:
        const { id } = action
        return state.dataCargo.filter(task => task.id !== id)
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    CargoReducer: CargoReducer,
    UserReducer: UserReducer,
});
    
export default rootReducer;

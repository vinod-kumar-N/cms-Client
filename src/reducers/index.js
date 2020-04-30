import { ADD_NAME } from "../constants/action-types";
const intialState = {};
export default function rootReducer(state = intialState, action) {
  if (action.type === ADD_NAME) {
    return { ...state, userName: action.payload };
  }
  return state;
}

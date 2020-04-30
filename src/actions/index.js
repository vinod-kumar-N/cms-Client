import { ADD_NAME } from "../constants/action-types";

export function setName(payload) {
  return { type: ADD_NAME, payload };
}

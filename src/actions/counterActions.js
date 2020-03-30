import { INCREMENT } from "../actionTypes";
import { DECREMENT } from "../actionTypes";

export const incrementAction = value => ({
  type: INCREMENT,
  payload: value
});

export const decrementAction = value => ({
  type: DECREMENT,
  payload: value
});

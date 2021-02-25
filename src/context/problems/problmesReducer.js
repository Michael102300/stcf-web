import { ADD_PROBLEM, ERROR_PROBLEM, GET_PROBLEM } from "../../types";
//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_PROBLEM:
      return {
        ...state,
        problems: action.payload,
      };
    case ADD_PROBLEM:
      return {
        ...state,
        problems: [...state.problems, action.payload],
      };
    case ERROR_PROBLEM:
      return {
        ...state,
        msg: action.payload,
      };
    default:
      return state;
  }
};

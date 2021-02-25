import React, { useReducer } from "react";
import ProblemsContext from "./problemsContext";
import problemReducer from "./problmesReducer";
import clientAxios from "../../config/axios";

import {
  PROBLEM_TECH,
  ADD_PROBLEM,
  GET_PROBLEM,
  DELETE_PROBLEM,
  FORM_VALIDATE,
  CURRENT_PROBLEM,
  ERROR_PROBLEM,
  PROBLEM_VALIDATE_TECH,
} from "../../types";

const ProblemState = (props) => {
  const initialState = {
    problems: [],
    form: false,
    msg: null,
    errorForm: false,
    currentProblem: null,
  };

  const [state, dispatch] = useReducer(problemReducer, initialState);

  const getAllProblems = async () => {
    try {
      const res = await clientAxios.get("/api/problems");
      dispatch({
        type: GET_PROBLEM,
        payload: res.data,
      });
    } catch (error) {
      const alert = {
        msg: "Hubo un error",
        category: "alerta-error",
      };
      dispatch({
        type: ERROR_PROBLEM,
        payload: alert,
      });
    }
  };

  const createProblem = async (data) => {
    try {
      const res = await clientAxios.post("/api/problems", data);
      dispatch({
        type: ADD_PROBLEM,
        payload: res.data,
      });
    } catch (error) {
      const alert = {
        msg: "Hubo un error",
        category: "alerta-error",
      };
      dispatch({
        type: ERROR_PROBLEM,
        payload: alert,
      });
    }
  };

  return (
    <ProblemsContext.Provider
      value={{
        problems: state.problems,
        form: state.form,
        msg: state.mgs,
        errorForm: state.errorForm,
        currentProblem: state.currentProblem,
        createProblem,
        getAllProblems,
      }}
    >
      {props.children}
    </ProblemsContext.Provider>
  );
};

export default ProblemState;

import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import clientAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

import {
  SUCCESSFULL_REGISTRATION,
  ERROR_REGISTRATION,
  GET_USER,
  SUCCESSFULL_LOGIN,
  ERROR_LOGIN,
  LOG_OUT,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticate: null,
    user: null,
    msg: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const signupUser = async (datos) => {
    try {
      const response = await clientAxios.post("/api/users", datos);
      dispatch({
        type: SUCCESSFULL_REGISTRATION,
        payload: response.data,
      });
      authUser();
    } catch (error) {
      console.log(error);
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispatch({
        type: ERROR_REGISTRATION,
        payload: alert,
      });
    }
  };

  const authUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      //funcion para enviar el token por headers
      tokenAuth(token);
    }
    try {
      const response = await clientAxios.get("/api/auth");
      dispatch({
        type: GET_USER,
        payload: response.data.user,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ERROR_LOGIN,
      });
    }
  };

  //cuando el usuario inicia sesion
  const login = async (datos) => {
    try {
      const response = await clientAxios.post("/api/auth", datos);
      dispatch({
        type: SUCCESSFULL_LOGIN,
        payload: response.data,
      });
      authUser();
    } catch (error) {
      console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispatch({
        type: ERROR_LOGIN,
        payload: alert,
      });
    }
  };

  const logout = async () => {
    dispatch({
      type: LOG_OUT,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticate: state.authenticate,
        user: state.user,
        msg: state.msg,
        loading: state.loading,
        signupUser,
        login,
        authUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

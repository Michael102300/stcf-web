import React, { useContext } from "react";
import { Avatar } from "@material-ui/core";
import AuthContext from "../../context/auth/authContext";
import UserIcon from "../../assets/img/user.png";
import {
  Inicio,
  Registrados,
  Resueltos,
  Procesos,
  Cancelados,
  UserAdd,
} from "./admin";
import { Problems, Profile, NewProblem } from "./user";
import {
  Problems as ProblemTechs,
  Profile as ProfileTech,
  Cancelados as CancelTech,
  Proceso,
} from "./tech";
import FormProblem from "../problems/ProblemForm";

const UserZone = ({ view, setView }) => {
  const authContext = useContext(AuthContext);
  const { authUser, user } = authContext;
  return (
    <>
      {user ? (
        user.role === "cliente" ? (
          <User view={view} />
        ) : user.role === "tecnico" ? (
          <Tech view={view} />
        ) : user.role === "admin" || user.role === "analista" ? (
          <Admin view={view} setView={setView} />
        ) : null
      ) : null}
    </>
  );
};

const User = ({ view }) => {
  return (
    <>
      {view === 0 ? (
        <Profile />
      ) : view === 1 ? (
        <NewProblem />
      ) : view === 2 ? (
        <Problems />
      ) : null}
    </>
  );
};
const Admin = ({ view, setView }) => {
  return (
    <>
      {view === 0 ? (
        <Inicio setView={setView} />
      ) : view === 1 ? (
        <Registrados />
      ) : view === 2 ? (
        <Resueltos />
      ) : view === 3 ? (
        <Procesos />
      ) : view === 4 ? (
        <Cancelados />
      ) : view === 7 ? (
        <UserAdd />
      ) : view === 8 ? (
        <FormProblem />
      ) : null}
    </>
  );
};
const Tech = ({ view }) => {
  return (
    <>
      {view === 0 ? (
        <ProfileTech />
      ) : view === 2 ? (
        <ProblemTechs />
      ) : view === 3 ? (
        <CancelTech />
      ) : view === 1 ? (
        <Proceso />
      ) : null}
    </>
  );
};

export default UserZone;

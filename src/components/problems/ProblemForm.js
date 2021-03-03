import React, { useContext, useState, useEffect } from "react";
import { TextField, Select, MenuItem, InputLabel } from "@material-ui/core";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";
import ProblemContext from "../../context/problems/problemsContext";

const ProblemForm = () => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;
  const authContext = useContext(AuthContext);
  const { msg, authenticate, signupUser } = authContext;
  const problemContext = useContext(ProblemContext);
  const { techs, users, getAllUsers, getTechs, createProblem } = problemContext;
  const [problem, setProblem] = useState({
    name: "",
    stateProcces: "",
    tecnico: "",
    dificulty: "",
    description: "",
    solution: "",
    user: "",
  });

  useEffect(() => {
    getAllUsers();
  }, []);
  useEffect(() => {
    getTechs();
  }, []);

  const {
    name,
    stateProcces,
    tecnico,
    dificulty,
    description,
    solution,
    user,
  } = problem;

  const states = [
    { id: 1, name: "registrado" },
    { id: 2, name: "proceso" },
    { id: 3, name: "resuelto" },
    { id: 4, name: "cancelado" },
  ];
  const dificults = [
    { id: 1, name: "baja" },
    { id: 2, name: "media" },
    { id: 3, name: "alta" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setProblem({
      ...problem,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(problem);
    createProblem(problem);
    setProblem({
      name: "",
      stateProcces: "",
      tecnico: "",
      tecnicoName: "",
      dificulty: "",
      description: "",
      solution: "",
      user: "",
    });
  };
  console.log(techs);
  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          borderRadius: 10,
          backgroundColor: "white",
          padding: 10,
        }}
      >
        <h1 style={{ textAlign: "start", marginLeft: 20, marginTop: 20 }}>
          Crea un problema
        </h1>
        <form onSubmit={onSubmit}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="campo-form" style={{ width: "45%" }}>
              <TextField
                id="name"
                name="name"
                type="text"
                placeholder="Nombre del problema"
                value={name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="campo-form" style={{ width: "45%" }}>
              <Select
                fullWidth
                style={{ fontSize: 20 }}
                defaultValue="Escoge el usuario"
                onChange={(e) => handleChange(e)}
                name="user"
              >
                {users
                  ? users.map((us) => (
                      <MenuItem style={{ fontSize: 20 }} value={us._id}>
                        {us.name}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="campo-form" style={{ width: "29%" }}>
              <Select
                fullWidth
                style={{ fontSize: 20 }}
                defaultValue="Escoge el tecnico"
                onChange={(e) => handleChange(e)}
                name="tecnico"
              >
                {techs
                  ? techs.map((us) => (
                      <MenuItem style={{ fontSize: 20 }} value={us._id}>
                        {us.name}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </div>
            <div className="campo-form" style={{ width: "29%" }}>
              <Select
                fullWidth
                style={{ fontSize: 20 }}
                defaultValue={"estado"}
                onChange={(e) => handleChange(e)}
                name="stateProcces"
              >
                {states.map((st) => (
                  <MenuItem style={{ fontSize: 20 }} value={st.name}>
                    {st.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="campo-form" style={{ width: "29%" }}>
              <Select
                fullWidth
                style={{ fontSize: 20 }}
                defaultValue={dificulty || ""}
                name="dificulty"
                onChange={(e) => handleChange(e)}
              >
                {dificults.map((st) => (
                  <MenuItem style={{ fontSize: 20 }} value={st.name}>
                    {st.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <div
            className="campo-form"
            style={{ marginLeft: 20, marginRight: 20 }}
          >
            <TextField
              id="description"
              name="description"
              type="text"
              placeholder="Descripcion del problema"
              value={description}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div
            className="campo-form"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 20,
            }}
          >
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Crear"
              style={{ width: 150 }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProblemForm;

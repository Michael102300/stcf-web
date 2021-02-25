import React, { useContext, useState, useEffect } from "react";
import { TextField, Card } from "@material-ui/core";
import AuthContext from "../../../context/auth/authContext";
import ProblemContext from "../../../context/problems/problemsContext";

const NewProblem = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const problemContext = useContext(ProblemContext);
  const { createProblem } = problemContext;
  const [problem, setProblem] = useState({
    name: "",
    description: "",
    user: user._id,
  });

  const { name, description } = problem;

  const handleChange = (e) => {
    setProblem({
      ...problem,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(problem);
    if (name === "" || description === "") {
      return;
    }
    createProblem(problem);
    setProblem({
      name: "",
      description: "",
      user: user._id,
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <Card style={{ padding: 20 }}>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <TextField
              id="name"
              name="name"
              label="Nombre del problema"
              type="text"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <TextField
              id="description"
              name="description"
              label="Descripcion del problema"
              type="text"
              value={description}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Crear problema"
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewProblem;

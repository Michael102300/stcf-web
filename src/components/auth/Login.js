import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";
import Tech from "../../assets/img/welcome.png";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;
  const authContext = useContext(AuthContext);
  const { msg, authenticate, login } = authContext;

  useEffect(() => {
    if (authenticate) {
      props.history.push("/problems");
    }
    if (msg) {
      showAlert(msg.msg, msg.category);
    }
    //eslint-disable-next-line
  }, [msg, authenticate, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      showAlert("Todos los campos son obligatorios", "alerta-error");
    } else {
      login({ email, password });
    }
  };
  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}> {alert.msg} </div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <img src={Tech} width={250} style={{ marginLeft: "20%" }} />
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Sign In"
            />
          </div>
        </form>
        <Link to={"/signup"} className="enlace-cuenta">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;

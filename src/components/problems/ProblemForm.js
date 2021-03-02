import React, { useContext, useState } from "react";
import { TextField } from "@material-ui/core";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";

const ProblemForm = () => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;
  const authContext = useContext(AuthContext);
  const { msg, authenticate, signupUser } = authContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    nit: "",
    address: "",
    phone: "",
    mobile: "",
  });

  const {
    name,
    email,
    password,
    confirmpassword,
    nit,
    address,
    phone,
    mobile,
  } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmpassword.trim() === "" ||
      nit.trim() === "" ||
      address.trim() === "" ||
      phone.trim() === "" ||
      mobile.trim() === ""
    ) {
      showAlert("Todos los campos son obligatorios", "alerta-error");
      return;
    }
    if (password.length < 6) {
      showAlert("Password minimo de 6 caracteres", "alerta-error");
      return;
    }
    if (phone < 8) {
      showAlert("Ingrese un numero de casa valido");
      return;
    }
    if (mobile < 11) {
      showAlert("Ingrese un numero de celular valido");
      return;
    }
    if (password !== confirmpassword) {
      showAlert("Password no son iguales", "alerta-error");
      return;
    }
    signupUser({
      name,
      email,
      password,
      NIT: nit,
      address,
      mobile,
      phone,
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="campo-form">
          <TextField
            id="name"
            name="name"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="campo-form">
          <TextField
            id="nit"
            name="nit"
            type="text"
            placeholder="Identificacion"
            value={nit}
            onChange={onChange}
          />
        </div>
        <div className="campo-form">
          <TextField
            id="phone"
            name="phone"
            type="text"
            placeholder="Numero casa"
            value={phone}
            onChange={onChange}
          />
        </div>
        <div className="campo-form">
          <TextField
            id="mobile"
            name="mobile"
            type="text"
            placeholder="Numero celular"
            value={mobile}
            onChange={onChange}
          />
        </div>
        <div className="campo-form">
          <TextField
            id="address"
            name="address"
            type="text"
            placeholder="Direccion"
            value={address}
            onChange={onChange}
          />
        </div>
        <div className="campo-form">
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="campo-form">
          <TextField
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="campo-form">
          <TextField
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={onChange}
          />
        </div>
        <div className="campo-form">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Sign Up"
          />
        </div>
      </form>
      {/* <Link to={"/"} className="enlace-cuenta">
        Sign In
      </Link> */}
    </div>
  );
};

export default ProblemForm;

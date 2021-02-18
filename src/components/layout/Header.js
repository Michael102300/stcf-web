import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import { ExitToApp } from "@material-ui/icons";
const Header = () => {
  const authContext = useContext(AuthContext);
  const { user, authUser, logout } = authContext;

  useEffect(() => {
    authUser();
    //eslint-disable-next-line
  }, []);

  return (
    <header className="app-header">
      <p className="nombre-usuario" style={{ marginTop: 10, fontSize: 30 }}>
        Bienvenido {user ? user.name : null} !
      </p>
      <nav className="nav-principal">
        <button className="btn btn-blank btn-primario" onClick={() => logout()}>
          <ExitToApp style={{ fontSize: 60 }} />
        </button>
      </nav>
    </header>
  );
};

export default Header;

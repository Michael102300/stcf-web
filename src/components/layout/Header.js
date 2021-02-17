import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
const Header = () => {
  const authContext = useContext(AuthContext);
  const { user, authUser, logout } = authContext;

  useEffect(() => {
    authUser();
    //eslint-disable-next-line
  }, []);

  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Bienvenido {user ? user.name : null} ! a STFC
      </p>
      <nav className="nav-principal">
        <button className="btn btn-blank btn-primario" onClick={() => logout()}>
          LogOut
        </button>
      </nav>
    </header>
  );
};

export default Header;

import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";

const UserZone = () => {
  const authContext = useContext(AuthContext);
  const { authUser, user } = authContext;
  return (
    <>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <h1> Direccion {user.address}</h1>
          <h1> Identificacion {user.NIT}</h1>
          <h1> Correo {user.email}</h1>
          <h1> Telefono {user.phone}</h1>
          <h1> Celular {user.mobile}</h1>
        </div>
      ) : null}
    </>
  );
};

export default UserZone;

import React, { useContext } from "react";
import { Avatar } from "@material-ui/core";
import AuthContext from "../../context/auth/authContext";
import UserIcon from "../../assets/img/user.png";

const UserZone = () => {
  const authContext = useContext(AuthContext);
  const { authUser, user } = authContext;
  return (
    <>
      {user ? (
        <div className="user-zone">
          <div className="zone">
            <div className="user">
              <Avatar src={UserIcon} className="userIcon" />
              <table>
                <tr>
                  <td>
                    <h2>Nombre:</h2>
                  </td>
                  <td>
                    <h2>{user.name}</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>Identificacion: </h2>
                  </td>
                  <td>
                    <h2>{user.NIT}</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>Correo electronico: </h2>
                  </td>
                  <td>
                    <h2>{user.email}</h2>
                  </td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr>
                  <td>
                    <h2>Direccion: </h2>
                  </td>
                  <td>
                    <h2>{user.address}</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>Telefono: </h2>
                  </td>
                  <td>
                    <h2>{user.phone}</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>Celular: </h2>
                  </td>
                  <td>
                    <h2>{user.mobile}</h2>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserZone;

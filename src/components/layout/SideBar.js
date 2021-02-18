import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const SideBar = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const handleChange = () => {};
  console.log(user);
  return (
    <aside>
      {user ? (
        user.role === "cliente" ? (
          <SideBarUser />
        ) : user.role === "tecnico" ? (
          <SideBarTech />
        ) : user.role === "admin" || user.role === "analista" ? (
          <SideBarAdmin />
        ) : null
      ) : null}
    </aside>
  );
};

const SideBarUser = () => {
  return (
    <>
      <h1>STFC</h1>
      <div className="proyectos">
        <ul className="listado-proyectos">
          <li>
            <button type="button" className="btn btn-blank">
              Mi informacion
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-blank">
              Crear problema
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-blank">
              Mis problemas
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

const SideBarTech = () => {
  return (
    <>
      <h1>
        Tickets <span>STFC</span>
      </h1>
      <div className="proyectos">
        <ul className="listado-proyectos">
          <li>
            <button type="button" className="btn btn-blank">
              Mi informacion
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-blank">
              En proceso
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-blank">
              Nuevos problemas
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-blank">
              Problemas cerrados
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

const SideBarAdmin = () => {
  return (
    <>
      <h1>
        Tickets <span>STFC</span>
      </h1>
      <div className="proyectos">
        <ul className="listado-proyectos">
          <li>
            <button type="button" className="btn btn-blank">
              Inicio
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-blank">
              Registros
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-blank">
              Resueltos
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-blank">
              Proceso
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-blank">
              Cancelados
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-blank">
              Promedio
            </button>
          </li>
          <li>
            <button type="button" className="btn btn-blank">
              Historial
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;

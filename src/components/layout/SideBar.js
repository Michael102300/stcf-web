import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const SideBar = ({ setView }) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  return (
    <aside>
      {user ? (
        user.role === "cliente" ? (
          <SideBarUser setView={setView} />
        ) : user.role === "tecnico" ? (
          <SideBarTech setView={setView} />
        ) : user.role === "admin" || user.role === "analista" ? (
          <SideBarAdmin setView={setView} />
        ) : null
      ) : null}
    </aside>
  );
};

const SideBarUser = ({ setView }) => {
  return (
    <>
      <h1>STFC</h1>
      <div className="proyectos">
        <ul className="listado-proyectos">
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(0)}
            >
              Mi informacion
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(1)}
            >
              Crear problema
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(2)}
            >
              Mis problemas
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

const SideBarTech = ({ setView }) => {
  return (
    <>
      <h1>
        Tickets <span>STFC</span>
      </h1>
      <div className="proyectos">
        <ul className="listado-proyectos">
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(0)}
            >
              Mi informacion
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(1)}
            >
              En proceso
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(2)}
            >
              Nuevos problemas
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(3)}
            >
              Problemas cerrados
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

const SideBarAdmin = ({ setView }) => {
  return (
    <>
      <h1>
        Tickets <span>STFC</span>
      </h1>
      <div className="proyectos">
        <ul className="listado-proyectos">
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(0)}
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(1)}
            >
              Registros
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(2)}
            >
              Resueltos
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(3)}
            >
              Proceso
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(4)}
            >
              Cancelados
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(5)}
            >
              Promedio
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={() => setView(6)}
            >
              Historial
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;

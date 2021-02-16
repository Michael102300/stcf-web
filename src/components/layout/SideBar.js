import React from "react";

const SideBar = () => {
  return (
    <aside>
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
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;

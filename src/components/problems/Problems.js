import React, { useContext, useEffect, useState } from "react";

import SideBar from "../layout/SideBar";
import Header from "../layout/Header";
/* import FormTask from "../tasks/FormTask";
import ListTasks from "../tasks/ListTasks"; */
import AuthContext from "../../context/auth/authContext";
import ZoneViews from "../ZoneViews/ZoneViews";
import Welcome from "../ZoneViews/admin/Inicio";

const Problems = () => {
  const authContext = useContext(AuthContext);
  const { authUser } = authContext;
  const [view, setView] = useState(0);

  useEffect(() => {
    authUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <SideBar setView={setView} />
      <div className="seccion-principal">
        <Header />
        <main>
          <ZoneViews view={view} setView={setView} />
        </main>
      </div>
    </div>
  );
};

export default Problems;

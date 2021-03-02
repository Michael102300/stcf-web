import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import {
  List,
  ListSubheader,
  ListItemText,
  ListItem,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import {
  Home,
  PersonAdd,
  LibraryAdd,
  LibraryAddCheck,
  LibraryBooks,
  VideoLibrary,
  Cancel,
  AccountTree,
  AllInbox,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  btn: {
    marginTop: 2,
    padding: 1.5,
    fontSize: 2.4,
    fontWeight: 400,
    borderRadius: 0.5,
    backgroundColor: "red",
  },
}));

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
  const classes = useStyles();
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
  const classes = useStyles();
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
        <span>STFC</span>
      </h1>
      <List>
        <ListItem>
          <ListItemIcon>
            <Home style={{ fontSize: 25 }} />
          </ListItemIcon>
          <ListItemText
            primary="Incio"
            disableTypography={true}
            onClick={() => setView(0)}
          />
        </ListItem>
      </List>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div" style={{ fontSize: 16 }}>
            Creacion usuario o problema
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemIcon>
            <PersonAdd style={{ fontSize: 25 }} />
          </ListItemIcon>
          <ListItemText
            primary="Usuarios"
            disableTypography={true}
            onClick={() => setView(7)}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LibraryAdd style={{ fontSize: 25 }} />
          </ListItemIcon>
          <ListItemText
            disableTypography={true}
            primary="Problemas"
            onClick={() => setView(8)}
          />
        </ListItem>
      </List>
      <List
        component="nav"
        subheader={
          <ListSubheader style={{ fontSize: 16 }} component="div">
            Problemas
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemIcon>
            <LibraryBooks style={{ fontSize: 25 }} />
          </ListItemIcon>
          <ListItemText
            primary="Registrados"
            disableTypography={true}
            onClick={() => setView(1)}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <VideoLibrary style={{ fontSize: 25 }} />
          </ListItemIcon>
          <ListItemText
            primary="En proceso"
            disableTypography={true}
            onClick={() => setView(3)}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LibraryAddCheck style={{ fontSize: 25 }} />
          </ListItemIcon>
          <ListItemText
            primary="Resueltos"
            disableTypography={true}
            onClick={() => setView(2)}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Cancel style={{ fontSize: 25 }} />
          </ListItemIcon>
          <ListItemText
            primary="Cancelados"
            disableTypography={true}
            onClick={() => setView(4)}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AllInbox style={{ fontSize: 25 }} />
          </ListItemIcon>
          <ListItemText
            primary="Promedio"
            disableTypography={true}
            onClick={() => setView(5)}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AccountTree style={{ fontSize: 25 }} />
          </ListItemIcon>
          <ListItemText
            primary="Historial"
            disableTypography={true}
            onClick={() => setView(6)}
          />
        </ListItem>
      </List>
    </>
  );
};

export default SideBar;

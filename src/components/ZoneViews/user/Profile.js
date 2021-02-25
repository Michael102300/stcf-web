import React, { useContext, useEffect } from "react";
import AuthContext from "../../../context/auth/authContext";
import ProblemContext from "../../../context/problems/problemsContext";
import {
  Card,
  Avatar,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const Profile = () => {
  const authContext = useContext(AuthContext);
  const { user, authUser } = authContext;
  const problemContext = useContext(ProblemContext);
  const { getAllProblems } = problemContext;

  useEffect(() => {
    getAllProblems();
  }, []);

  return (
    <div
      style={{ padding: 20, display: "flex", justifyContent: "space-between" }}
    >
      <Card style={{ height: 300, width: "38%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <Avatar style={{ width: 200, height: 200, fontSize: 80 }}>
            {user ? user.name.substring(0, 2) : null}
          </Avatar>
        </div>
        <h1>Activo</h1>
      </Card>
      <Card style={{ height: 500, width: "60%" }}>
        <h1>Mi informacion</h1>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <div>
              <List
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ListItem
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "95%",
                    borderBottom: "solid",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                >
                  <h3
                    style={{ color: "black", fontStyle: "normal", margin: 0 }}
                  >
                    Nombre
                  </h3>
                  <h3
                    style={{
                      color: "black",
                      fontStyle: "normal",
                      textAlign: "right",
                      margin: 0,
                    }}
                  >
                    {user ? user.name : null}
                  </h3>
                </ListItem>
                <ListItem
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "95%",
                    borderBottom: "solid",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    marginTop: 20,
                  }}
                >
                  <h3
                    style={{ color: "black", fontStyle: "normal", margin: 0 }}
                  >
                    Numero de identificacion
                  </h3>
                  <h3
                    style={{
                      color: "black",
                      fontStyle: "normal",
                      textAlign: "right",
                      margin: 0,
                    }}
                  >
                    {user ? user.NIT : null}
                  </h3>
                </ListItem>
                <ListItem
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "95%",
                    borderBottom: "solid",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    marginTop: 20,
                  }}
                >
                  <h3
                    style={{ color: "black", fontStyle: "normal", margin: 0 }}
                  >
                    Correo electronico
                  </h3>
                  <h3
                    style={{
                      color: "black",
                      fontStyle: "normal",
                      textAlign: "right",
                      margin: 0,
                    }}
                  >
                    {user ? user.email : null}
                  </h3>
                </ListItem>
                <ListItem
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "95%",
                    borderBottom: "solid",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    marginTop: 20,
                  }}
                >
                  <h3
                    style={{ color: "black", fontStyle: "normal", margin: 0 }}
                  >
                    Direccion
                  </h3>
                  <h3
                    style={{
                      color: "black",
                      fontStyle: "normal",
                      textAlign: "right",
                      margin: 0,
                    }}
                  >
                    {user ? user.address : null}
                  </h3>
                </ListItem>
                <ListItem
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "95%",
                    borderBottom: "solid",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    marginTop: 20,
                  }}
                >
                  <h3
                    style={{ color: "black", fontStyle: "normal", margin: 0 }}
                  >
                    Telefono
                  </h3>
                  <h3
                    style={{
                      color: "black",
                      fontStyle: "normal",
                      textAlign: "right",
                      margin: 0,
                    }}
                  >
                    {user ? user.phone : null}
                  </h3>
                </ListItem>
                <ListItem
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "95%",
                    borderBottom: "solid",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    marginTop: 20,
                  }}
                >
                  <h3
                    style={{ color: "black", fontStyle: "normal", margin: 0 }}
                  >
                    Celular
                  </h3>
                  <h3
                    style={{
                      color: "black",
                      fontStyle: "normal",
                      textAlign: "right",
                      margin: 0,
                    }}
                  >
                    {user ? user.mobile : null}
                  </h3>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Profile;

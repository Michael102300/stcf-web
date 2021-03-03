import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Input, Select, MenuItem } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ProblemContext from "../../context/problems/problemsContext";
import AuthContext from "../../context/auth/authContext";

export default function FormDialog({ setFormModal, formModal }) {
  const problemContext = useContext(ProblemContext);
  const {
    currentProblem,
    problems,
    techs,
    getTechs,
    editProblem,
  } = problemContext;
  const authContext = useContext(AuthContext);
  const UserCurrent = authContext.user;
  const problem = problems.find((pro) => pro._id === currentProblem);
  useEffect(() => getTechs(), []);
  const {
    _id,
    name,
    description,
    stateProcces,
    createdAt,
    dificulty,
    tecnico,
    user,
    tecnicoName,
  } = problem;
  console.log("rpoblem", problem);
  const [form, setForm] = useState({
    _id,
    user,
    name,
    description,
    tecnico,
    stateProcces,
    dificulty,
    createdAt,
    solution: "",
    editedAt: new Date().toISOString(),
  });
  const states = [
    { id: 1, name: "registrado" },
    { id: 2, name: "proceso" },
    { id: 3, name: "resuelto" },
    { id: 4, name: "cancelado" },
  ];
  const dificults = [
    { id: 1, name: "baja" },
    { id: 2, name: "media" },
    { id: 3, name: "alta" },
  ];
  const handleClose = () => {
    setFormModal(false);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submit = () => {
    setFormModal(false);
    editProblem(form);
  };
  return (
    <div>
      <Dialog open={formModal} onClose={handleClose}>
        <DialogTitle
          disableTypography={true}
          style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}
        >
          Editar problema
        </DialogTitle>
        <DialogContent style={{ padding: 20 }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <div style={{ width: "49%" }}>
              <DialogContentText style={{ margin: 0, fontSize: 20 }}>
                Nombre :{" "}
              </DialogContentText>
              <Input
                defaultValue={name || ""}
                fullWidth
                style={{ fontSize: 20, color: "black" }}
                disabled
              />
            </div>
            <div style={{ width: "49%" }}>
              <DialogContentText style={{ margin: 0, fontSize: 20 }}>
                Descripcion :{" "}
              </DialogContentText>
              <Input
                defaultValue={description || ""}
                fullWidth
                style={{ fontSize: 20, color: "black" }}
                disabled
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              marginBottom: 20,
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ width: UserCurrent.role !== "tecnico" ? "30%" : "49%" }}
            >
              <DialogContentText style={{ margin: 0, fontSize: 20 }}>
                Estado :{" "}
              </DialogContentText>
              <Select
                fullWidth
                style={{ fontSize: 20, color: "black" }}
                defaultValue={stateProcces || ""}
                onChange={(e) => handleChange(e)}
                name="stateProcces"
                disabled={UserCurrent.role === "tecnico" ? false : true}
              >
                {states.map((st) => (
                  <MenuItem style={{ fontSize: 20 }} value={st.name}>
                    {st.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div
              style={{ width: UserCurrent.role !== "tecnico" ? "30%" : "49%" }}
            >
              <DialogContentText style={{ margin: 0, fontSize: 20 }}>
                Dificultad :{" "}
              </DialogContentText>
              <Select
                fullWidth
                style={{ fontSize: 20, color: "black" }}
                defaultValue={dificulty || ""}
                name="dificulty"
                onChange={(e) => handleChange(e)}
                disabled={UserCurrent.role === "tecnico" ? true : false}
              >
                {dificults.map((st) => (
                  <MenuItem style={{ fontSize: 20 }} value={st.name}>
                    {st.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
            {console.log("state", stateProcces)}
            {UserCurrent.role !== "tecnico" ? (
              <div style={{ width: "30%" }}>
                <DialogContentText style={{ margin: 0, fontSize: 20 }}>
                  Tecnico :{" "}
                </DialogContentText>
                <Select
                  fullWidth
                  style={{ fontSize: 20 }}
                  name="tecnico"
                  onChange={(e) => handleChange(e)}
                >
                  {techs &&
                    techs.map((st) => (
                      <MenuItem style={{ fontSize: 20 }} value={st._id}>
                        {st.name}
                      </MenuItem>
                    ))}
                </Select>
              </div>
            ) : null}
          </div>
          {UserCurrent ? (
            UserCurrent.role === "tecnico" && stateProcces !== "registrado" ? (
              <>
                <DialogContentText style={{ margin: 0, fontSize: 20 }}>
                  Solucion:
                </DialogContentText>
                <Input
                  name="solution"
                  id="solution"
                  fullWidth
                  style={{ fontSize: 20, color: "black" }}
                  onChange={(e) => handleChange(e)}
                />
              </>
            ) : null
          ) : null}

          <DialogContentText style={{ margin: 0, fontSize: 20 }}>
            Fecha de creacion:{" "}
          </DialogContentText>
          <Input
            defaultValue={createdAt.substring(0, 10) || ""}
            fullWidth
            disabled
            style={{ fontSize: 20, color: "black" }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="secondary"
            variant="contained"
            style={{ fontSize: 20 }}
          >
            Cancelar
          </Button>
          <Button
            onClick={submit}
            variant="contained"
            color="primary"
            style={{ fontSize: 20 }}
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

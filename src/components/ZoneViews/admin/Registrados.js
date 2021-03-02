import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ModalForm from "../../layout/ModalForm";

import ProblemContext from "../../../context/problems/problemsContext";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Registrados = () => {
  const classes = useStyles();
  const problemContext = useContext(ProblemContext);
  const { problems, saveCurrentProblem, currentProblem } = problemContext;
  const [formModal, setFormModal] = useState(false);
  let register = problems.filter((pro) => pro.stateProcces === "registrado");
  const currentProblemLocal = (id) => {
    saveCurrentProblem(id);
    setFormModal(true);
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: 20 }}>Nombre</TableCell>
            <TableCell style={{ fontSize: 20 }} align="center">
              Dificultad
            </TableCell>
            <TableCell style={{ fontSize: 20 }} align="center">
              Estado
            </TableCell>
            <TableCell style={{ fontSize: 20 }} align="center">
              Tecnico
            </TableCell>
            <TableCell style={{ fontSize: 20 }} align="center">
              Descripcion
            </TableCell>
            <TableCell style={{ fontSize: 20 }} align="center">
              Fecha de creacion
            </TableCell>
            <TableCell style={{ fontSize: 20 }} align="center">
              Accion
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentProblem && formModal ? (
            <ModalForm formModal={formModal} setFormModal={setFormModal} />
          ) : null}
          {register ? (
            register.length > 0 ? (
              register.map((row) => (
                <TableRow key={row._id}>
                  <TableCell style={{ fontSize: 15 }}>{row.name}</TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row.dificulty}
                  </TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row.stateProcces}
                  </TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row.tecnico ? row.tecnico : "sin asignar"}
                  </TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row.description}
                  </TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row.createdAt.substring(0, 10)}
                  </TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    <IconButton
                      color="primary"
                      aria-label="add to shopping cart"
                      onClick={() => currentProblemLocal(row._id)}
                    >
                      <EditIcon fontSize="large" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  style={{ fontSize: 20, textAlign: "center" }}
                  colSpan="7"
                >
                  No tienes problemas registrados
                </TableCell>
              </TableRow>
            )
          ) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Registrados;

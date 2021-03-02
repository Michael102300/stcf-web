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
import ProblemContext from "../../../context/problems/problemsContext";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Cancelados = () => {
  const classes = useStyles();
  const problemContext = useContext(ProblemContext);
  const { problems, saveCurrentProblem, currentProblem } = problemContext;
  let cancels = problems.filter((pro) => pro.stateProcces === "cancelado");
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: 20 }}>Nombre</TableCell>
            <TableCell style={{ fontSize: 20 }} align="right">
              Dificultad
            </TableCell>
            <TableCell style={{ fontSize: 20 }} align="right">
              Estado
            </TableCell>
            <TableCell style={{ fontSize: 20 }} align="right">
              Tecnico
            </TableCell>
            <TableCell style={{ fontSize: 20 }} align="right">
              Descripcion
            </TableCell>
            <TableCell style={{ fontSize: 20 }} align="right">
              Fecha de creacion
            </TableCell>
            <TableCell style={{ fontSize: 20 }} align="right">
              Fecha de cancelacion
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cancels ? (
            cancels.length > 0 ? (
              cancels.map((row) => (
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
                    {row.editAt.substring(0, 10)}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  style={{ fontSize: 20, textAlign: "center" }}
                  colSpan="7"
                >
                  No tienes problemas cancelados
                </TableCell>
              </TableRow>
            )
          ) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cancelados;

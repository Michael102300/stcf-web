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

const Resueltos = () => {
  const classes = useStyles();
  const problemContext = useContext(ProblemContext);
  const { problems, saveCurrentProblem, currentProblem } = problemContext;
  let results = problems.filter((pro) => pro.stateProcces === "resuelto");
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
              Fecha de cancelacion
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results ? (
            results.length > 0 ? (
              results.map((row) => (
                <TableRow key={row._id}>
                  <TableCell style={{ fontSize: 15 }}>{row.name}</TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row.dificulty}
                  </TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row.stateProcces}
                  </TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row.tecnicoName ? row.tecnicoName.name : "sin asignar"}
                  </TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row.description}
                  </TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row.createdAt.substring(0, 10)}
                  </TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row.editAt ? row.editAt.substring(0, 10) : "sin fecha"}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  style={{ fontSize: 20, textAlign: "center" }}
                  colSpan="7"
                >
                  No tienes problemas Resueltos
                </TableCell>
              </TableRow>
            )
          ) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Resueltos;

import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ProblemContext from "../../../context/problems/problemsContext";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Problems = () => {
  const classes = useStyles();
  const problemContext = useContext(ProblemContext);
  const { problems } = problemContext;
  console.log(problems);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: 20 }} align="center">
              Identificador
            </TableCell>
            <TableCell style={{ fontSize: 20 }} align="center">
              Nombre
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
          </TableRow>
        </TableHead>
        <TableBody>
          {problems
            ? problems.map((row) => (
                <TableRow key={row._id}>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row._id}
                  </TableCell>
                  <TableCell style={{ fontSize: 15 }} align="center">
                    {row.name}
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
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Problems;

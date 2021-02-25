import React from "react";
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{ fontSize: 15 }}>{row.name}</TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.fat}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.carbs}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                {row.protein}
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                va la fecha
              </TableCell>
              <TableCell style={{ fontSize: 15 }} align="right">
                va la fecha
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cancelados;

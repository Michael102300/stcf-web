import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  CardMedia,
} from "@material-ui/core";
import Register from "../../../assets/icon/register.svg";
import Progress from "../../../assets/icon/statistics.svg";
import Cancel from "../../../assets/icon/delete.svg";
import Result from "../../../assets/icon/results.svg";
import { Line } from "@reactchartjs/react-chart.js";
import ProblemContext from "../../../context/problems/problemsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "30%",
    marginLeft: "10%",
    marginTop: "2%",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  container: {
    display: "flex",
    marginBottom: 40,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 105,
  },
}));

const Inicio = ({ setView }) => {
  const classes = useStyles();
  const theme = useTheme();
  const problemContext = useContext(ProblemContext);
  const { problems } = problemContext;
  let register = problems.filter((pro) => pro.stateProcces === "registrado");
  let proceso = problems.filter((pro) => pro.stateProcces === "proceso");
  let cancelado = problems.filter((pro) => pro.stateProcces === "cancelado");
  let resuelto = problems.filter((pro) => pro.stateProcces === "resuelto");
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "# of No Votes",
        data: [1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };
  return (
    <div>
      <div className={classes.container}>
        <Card className={classes.root} onClick={() => setView(1)}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h3" variant="h3">
                Registros
              </Typography>
              <Typography vcomponent="h4" variant="h4" color="textSecondary">
                {register.length}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={Register}
            title="Live from space album cover"
          />
        </Card>
        <Card className={classes.root} onClick={() => setView(3)}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h3" variant="h3">
                Proceso
              </Typography>
              <Typography vcomponent="h4" variant="h4" color="textSecondary">
                {proceso.length}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={Progress}
            title="Live from space album cover"
          />
        </Card>
      </div>
      <div className={classes.container}>
        <Card className={classes.root} onClick={() => setView(4)}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h3" variant="h3">
                Cancelados
              </Typography>
              <Typography vcomponent="h4" variant="h4" color="textSecondary">
                {cancelado.length}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={Cancel}
            title="Live from space album cover"
          />
        </Card>
        <Card className={classes.root} onClick={() => setView(2)}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h3" variant="h3">
                Resueltos
              </Typography>
              <Typography vcomponent="h4" variant="h4" color="textSecondary">
                {resuelto.length}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={Result}
            title="Live from space album cover"
          />
        </Card>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Inicio;

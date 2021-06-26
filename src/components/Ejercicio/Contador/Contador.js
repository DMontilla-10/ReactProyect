import React, { useState } from "react";
import Botón from "../Botón";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import { NavLink, Switch } from "react-router-dom";

export default function Contador() {
  const classes = useStyles();

  const [count, setCount] = useState(0);

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Clickeaste {count} veces
      </Typography>
      <Botón setCount={setCount} count={count} />
    </div>
  );
}

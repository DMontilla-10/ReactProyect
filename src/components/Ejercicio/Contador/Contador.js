import React, { useState } from "react";
import Botón from "../Botón";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";

import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

const Contador = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const history = useHistory();

  const goToAbout = () => {
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Clickeaste {count} veces
      </Typography>
      <Botón setCount={setCount} count={count} />
      <button onClick={() => goToAbout()}>Go to Home</button>
      {/* <Typography variant="h6" className={classes.title}>
        <Link to='/listarUsuarios'> Listar usuarios </Link>
      </Typography> */}
    </div>
  );
}

export default Contador
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + theme.palette.common.black + ", 0.87)",
    background: theme.palette.common.white,
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + theme.palette.common.black + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    overflow: "visible",
  },
}));

const CardComponent: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const classes = useStyles();

  return <Card className={classes.card}>{children}</Card>;
};

export default CardComponent;

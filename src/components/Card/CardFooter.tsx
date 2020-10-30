import React from "react";

import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardFooter: {
    padding: "0",
    paddingTop: "10px",
    margin: "0 15px 10px",
    borderRadius: "0",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    backgroundColor: "transparent",
    border: "0",
  },
  cardFooterProfile: {
    marginTop: "-15px",
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent",
  },
  cardFooterStats: {
    borderTop: "1px solid " + theme.palette.grey["100"],
    marginTop: "20px",
    "& svg": {
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "16px",
      height: "16px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "16px",
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px",
    },
  },
  cardFooterChart: {
    borderTop: "1px solid " + theme.palette.grey["100"],
  },
}));

const CardFooter: React.FC<{
  className: string;
  children: React.ReactNode;
  plain?: boolean;
  profile?: boolean;
  stats?: boolean;
  chart?: boolean;
}> = ({ className, children, plain, profile, stats, chart }) => {
  const classes = useStyles();

  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart,
    [className]: className !== undefined,
  });

  return <div className={cardFooterClasses}>{children}</div>;
};

export default CardFooter;

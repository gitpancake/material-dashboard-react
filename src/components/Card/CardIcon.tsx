import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import { hexToRgb } from "utils/colors";

const useStyles = makeStyles((theme) => ({
  cardIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader": {
      borderRadius: "3px",
      backgroundColor: theme.palette.grey["100"],
      padding: "15px",
      marginTop: "-20px",
      marginRight: "15px",
      float: "left",
    },
  },
  warningCardHeader: {
    color: theme.palette.common.white,
    "&:not($cardHeaderIcon)": {
      background:
        "linear-gradient(60deg, " +
        theme.palette.warning.main +
        ", " +
        theme.palette.warning.light +
        ")",
      boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(theme.palette.common.black) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(theme.palette.warning.light) +
        ",.4)",
    },
  },
  successCardHeader: {
    color: theme.palette.common.white,
    "&:not($cardHeaderIcon)": {
      background:
        "linear-gradient(60deg, " +
        theme.palette.success.main +
        ", " +
        theme.palette.success.light +
        ")",
      boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(theme.palette.common.black) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(theme.palette.success.main) +
        ",.4)",
    },
  },
  dangerCardHeader: {
    color: theme.palette.common.white,
    "&:not($cardHeaderIcon)": {
      background:
        "linear-gradient(60deg, " +
        theme.palette.error.main +
        ", " +
        theme.palette.error.light +
        ")",
      boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(theme.palette.common.black) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(theme.palette.error.main) +
        ",.4)",
    },
  },
  infoCardHeader: {
    color: theme.palette.common.white,
    "&:not($cardHeaderIcon)": {
      background:
        "linear-gradient(60deg, " +
        theme.palette.info.main +
        ", " +
        theme.palette.info.light +
        ")",
      boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(theme.palette.common.black) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(theme.palette.info.main) +
        ",.4)",
    },
  },
  primaryCardHeader: {
    color: theme.palette.common.white,
    "&:not($cardHeaderIcon)": {
      background:
        "linear-gradient(60deg, " +
        theme.palette.primary.main +
        ", " +
        theme.palette.primary.light +
        ")",
      boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(theme.palette.common.black) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(theme.palette.primary.main) +
        ",.4)",
    },
  },
}));

const CardIcon: React.FC<{
  className: string;
  children: React.ReactNode;
  color: "warning" | "success" | "danger" | "info" | "primary";
}> = ({ className, children, color }) => {
  const classes = useStyles();

  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[color + "CardHeader"]]: color,
    [className]: className !== undefined,
  });

  return <div className={cardIconClasses}>{children}</div>;
};

export default CardIcon;

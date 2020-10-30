import React from "react";

import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core";

import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardAvatar: {
    "&$cardAvatarProfile img": {
      width: "100%",
      height: "auto",
    },
  },
  cardAvatarProfile: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px auto 0",
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
    boxShadow:
      "0 16px 38px -12px rgba(" +
      theme.palette.common.black +
      ", 0.56), 0 4px 25px 0px rgba(" +
      theme.palette.common.black +
      ", 0.12), 0 8px 10px -5px rgba(" +
      theme.palette.common.black +
      ", 0.2)",
    "&$cardAvatarPlain": {
      marginTop: "0",
    },
  },
  cardAvatarPlain: {},
}));

const CardAvatar: React.FC<{
  children: React.ReactNode;
  profile?: boolean;
  plain?: boolean;
  className: string;
}> = ({ children, profile, plain, className }) => {
  const classes = useStyles();

  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [className]: className !== undefined,
  });

  return <Card className={cardAvatarClasses}>{children}</Card>;
};

export default CardAvatar;

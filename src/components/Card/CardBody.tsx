import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  cardBody: (props: any) => ({
    padding: "0.9375rem 20px",
    flex: "1 1 auto",
    WebkitBoxFlex: 1,
    position: "relative",

    paddingLeft: props.plain && "5px",
    paddingRight: props.plain && "5px",

    marginTop: props.profile && "15px",
  }),
});

const CardBody: React.FC<{
  children: React.ReactNode;
  plain?: boolean;
  profile?: boolean;
}> = ({ children, plain, profile }) => {
  const classes = useStyles({ plain, profile });

  return <div className={classes.cardBody}>{children}</div>;
};

export default CardBody;

import React from "react";
// @material-ui/core components
import { Typography, makeStyles } from "@material-ui/core";
// core components

import { Card, CardHeader, CardBody } from "components/Card";

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
  success: {
    color: theme.palette.success.main,
  },
  info: {
    color: theme.palette.info.main,
  },
  primary: {
    color: theme.palette.primary.main,
  },
  muted: {
    color: theme.palette.grey["700"],
  },
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
}));

export default function TypographyPage() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <Typography variant="h4">Heading</Typography>
        <Typography className={classes.cardCategoryWhite}>
          Created using Roboto Font Family
        </Typography>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>Header 1</div>
          <Typography variant="h1">Some lovely text</Typography>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 2</div>
          <Typography variant="h2">Some lovely text</Typography>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 3</div>
          <Typography variant="h3">Some lovely text</Typography>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 4</div>
          <Typography variant="h4">Some lovely text</Typography>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 5</div>
          <Typography variant="h5">Some lovely text</Typography>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 6</div>
          <Typography variant="h6">Some lovely text</Typography>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Paragraph</div>
          <p>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Muted Text</div>
          <Typography className={classes.muted}>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Typography>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Primary Text</div>
          <Typography className={classes.primary}>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Typography>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Info Text</div>
          <Typography className={classes.info}>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Typography>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Success Text</div>
          <Typography className={classes.success}>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Typography>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Warning Text</div>
          <Typography className={classes.warning}>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Typography>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Danger Text</div>
          <Typography className={classes.error}>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Typography>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Small Tag</div>
          <Typography variant="h2">
            Header with small subtitle
            <br />
            <small>
              Use {'"'}Small{'"'} tag for the headers
            </small>
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

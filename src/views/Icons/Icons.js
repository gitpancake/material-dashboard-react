/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import { Card, CardHeader, CardBody } from "components/Card";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <Typography variant="h4">Material Design Icons</Typography>
            <Typography className={classes.cardCategoryWhite}>
              Handcrafted by our friends from{" "}
              <a
                href="https://design.google.com/icons/?ref=creativetime"
                target="_blank"
              >
                Google
              </a>
            </Typography>
          </CardHeader>
          <CardBody>
            <Hidden only={["sm", "xs"]}>
              <iframe
                className={classes.iframe}
                src="https://material.io/icons/"
                title="Icons iframe"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Hidden>
            <Hidden only={["lg", "md"]}>
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="h5">
                  The icons are visible on Desktop mode inside an iframe. Since
                  the iframe is not working on Mobile and Tablets please visit
                  the icons on their original page on Google. Check the
                  <a
                    href="https://design.google.com/icons/?ref=creativetime"
                    target="_blank"
                  >
                    Material Icons
                  </a>
                </Typography>
              </Grid>
            </Hidden>
          </CardBody>
        </Card>
      </Grid>
    </Grid>
  );
}

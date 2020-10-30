import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const blackColor = "#555555";
const greyColor = "#dfdfdf";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ab47bc",
      light: "#8e24aa",
      dark: "#af2cc5",
    },
    secondary: {
      main: "#00FF00",
    },
    warning: {
      main: "#ff9800",
      light: "#ffa726",
    },
    success: {
      main: "#4caf50",
      light: "#66bb6a",
    },
    error: {
      main: "#ef5350",
      light: "#ef5350",
    },
    info: {
      main: "#26c6da",
      light: "#00acc1",
    },
    common: {
      black: blackColor,
      white: "#FFFFFF",
    },
    grey: {
      "100": greyColor,
      "700": "#777",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 12,
    fontWeightRegular: "lighter",
    h1: {
      fontSize: "38px",
      minHeight: "auto",
      marginBottom: "3px",
      textDecoration: "none",
    },
    h2: {
      fontSize: "34px",
      minHeight: "auto",
      marginBottom: "3px",
      textDecoration: "none",
    },
    h3: {
      fontSize: "28px",
      minHeight: "auto",
      color: blackColor,
      marginBottom: "3px",
      textDecoration: "none",
    },
    h4: {
      fontSize: "20px",
      minHeight: "auto",
      marginBottom: "3px",
      textDecoration: "none",
    },
    h5: {
      fontSize: "16px",
      minHeight: "auto",
      marginBottom: "3px",
      textDecoration: "none",
    },
    h6: {
      fontSize: "12px",
      minHeight: "auto",
      marginBottom: "3px",
      textDecoration: "none",
    },
  },
  overrides: {
    MuiGrid: {
      root: {
        padding: "5px",
      },
    },
  },
});

const MUI: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUI;

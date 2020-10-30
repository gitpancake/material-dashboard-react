import React from "react";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important",
    },
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: theme.palette.grey[100] + " !important",
      borderWidth: "1px !important",
    },
    "&:after": {
      borderColor: theme.palette.primary.main,
    },
  },
  underlineError: {
    "&:after": {
      borderColor: theme.palette.error.main,
    },
  },
  underlineSuccess: {
    "&:after": {
      borderColor: theme.palette.success.main,
    },
  },
  labelRoot: {
    color: theme.palette.grey[700] + " !important",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "1.42857",
    letterSpacing: "unset",
  },
  labelRootError: {
    color: theme.palette.error.main,
  },
  labelRootSuccess: {
    color: theme.palette.success.main,
  },
  feedback: {
    position: "absolute",
    top: "18px",
    right: "0",
    zIndex: 2,
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none",
  },
  marginTop: {
    marginTop: "16px",
  },
  formControl: {
    paddingBottom: "10px",
    margin: "27px 0 0 0",
    position: "relative",
    verticalAlign: "unset",
  },
}));

const CustomInput: React.FC<{
  labelText?: React.ReactNode;
  labelProps?: object;
  id?: string;
  inputProps?: object;
  formControlProps: { className: string };
  error?: boolean;
  success?: boolean;
}> = ({
  labelText,
  labelProps,
  id,
  inputProps,
  formControlProps,
  error,
  success,
}) => {
  const classes = useStyles();

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });

  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
  });

  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
  });

  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
};

export default CustomInput;

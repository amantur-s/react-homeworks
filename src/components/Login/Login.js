import React, { useState, useEffect, useReducer } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return {
      ...prevState,
      value: action.emailValue,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      ...prevState,
      isValid: prevState.value.includes("@"),
    };
  }
  if (action.type === "INPUT") {
    return {
      ...prevState,
      enteredPassword: action.valuePass,
    };
  }
  if (action.type === "BLUR") {
    return {
      ...prevState,
      passwordIsValid: prevState.enteredPassword.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
    enteredPassword: "",
    passwordIsValid: "",
  };
};
const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    isValid: "",
    value: "",
    enteredPassword: "",
    passwordIsValid: "",
  });

  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        emailState.value.includes("@") &&
          emailState.enteredPassword.trim().length > 6
      );
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [emailState.value, emailState.enteredPassword]);
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", emailValue: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    dispatchEmail({ type: "INPUT", valuePass: event.target.value });
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const validatePasswordHandler = () => {
    dispatchEmail({ type: "BLUR" });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, emailState.valuePass);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            emailState.passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={emailState.enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default Login;

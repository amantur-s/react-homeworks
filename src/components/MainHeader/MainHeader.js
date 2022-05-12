import React from "react";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const MainHeader = (props) => {
  const context = useContext(AuthContext);
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <label>Dark Mode</label>
      <input
        id="checkbox"
        type={"checkbox"}
        onClick={() => context.onClick((prevState) => !prevState)}
      />   
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;

import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setInteredUsername] = useState("");
  const [enteredAge, setInteredAge] = useState("");
  const [iserror, setIserror] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIserror({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values) ",
      });
      return;
    }
    if (+enteredAge < 1) {
      setIserror({
        title: "invalid age",
        message: "Please enter is valid age (> 1)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setInteredUsername("");
    setInteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setInteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInteredAge(event.target.value);
  };

  const ErrorHandler = () => {
    setIserror(null);
  };

  return (
    <>
      {iserror && (
        <ErrorModal
          title={iserror.title}
          message={iserror.message}
          onConfirm={ErrorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

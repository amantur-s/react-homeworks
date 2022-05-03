import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  const deleteListHandler = (id) => {
    let newUserList = userList.filter((elem) => {
      return elem.id !== id;
    });
    setUserList(newUserList);
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList
        deleteListHandler={deleteListHandler}
        users={userList}
      ></UsersList>
    </div>
  );
}

export default App;

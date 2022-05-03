import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./UserList.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const UsersList = (props) => {
  const [ismodal, setIsmodal] = useState("");
  const [id, setId] = useState("");

  const funcId = () => {
    props.deleteListHandler(id);
    deleteModal();
  };

  const deleteListHandler = (id) => {
    setIsmodal({
      title: "Удаление пользователя!",
      message: "Вы действительно хотите удалить?",
    });
    setId(id);
  };

  const deleteModal = () => {
    setIsmodal(false);
  };

  return (
    <>
      {ismodal && (
        <ErrorModal
          title={ismodal.title}
          message={ismodal.message}
          deleteListHandler={funcId}
          deleteModal={deleteModal}
        />
      )}
      <Card className={styles.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} {user.age} years old
              <Button onClick={() => deleteListHandler(user.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;

import CommentDate from "./CommentDate";
import UserInfo from "./UserInfo";
import Wrapper from "../UI/Wrapper";
import "./CommentStyle.css";

function Comment(props) {
  return (
    <div className="cont">
      <div className="Comment">
        <UserInfo author={props.author} />
        <Wrapper className="wrapper-text">
          <div className="Comment-text">{props.text}</div>
          <CommentDate date={props.date} />
        </Wrapper>
      </div>
    </div>
  );
}
export default Comment;

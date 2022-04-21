import CommentWrapper from "../UI/CommentWrapper";
import CommentDate from "./CommentDate";
import UserInfo from "./UserInfo";
import './CommentStyle.css';


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />

      <CommentWrapper className="UserInfo">
        <div className="Comment-text">{props.text}</div>
        <CommentDate date={props.date} />
      </CommentWrapper>
    </div>
  );
}
export default Comment;

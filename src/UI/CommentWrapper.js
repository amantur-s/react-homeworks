import "./CommentWrapper.css";

function CommentWrapper(props) {
  let classes = "wrapper " + props.className;
  return <div className={classes} >{props.children}</div>;
}

export default CommentWrapper;



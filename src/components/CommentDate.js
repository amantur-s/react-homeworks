import './CommentStyle.css';

function formatDate(date) {
  return date.toLocaleDateString();
}

function CommentDate(props) {
  return <div className="Comment-date">{formatDate(props.date)}</div>;
}

export default CommentDate;

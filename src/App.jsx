import "./App.css";
import Comment from "./components/Comment";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

function App() {
  return (
    <Comment author={comment.author} text={comment.text} date={comment.date} />
  );
}

export default App;

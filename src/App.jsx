import "./App.css";
import Comment from "./components/Comment";

const album = [
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/62/62',
    },
  },
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
];


function App() {
  return (
    <div className="App">
      {album.map((elem)=>{
        return <Comment
        key={Math.random()}
        author={elem.author}
        text={elem.text}
        date={elem.date}
        />
      })}
    </div>
  )
}

export default App;

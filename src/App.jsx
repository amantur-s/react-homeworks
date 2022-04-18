import './App.css';
import ExpenseOne from './components/ExpenseOne';
import ExpenseTwo from './components/ExpenseTwo';
import ExpenseThree from './components/ExpenseThree';

function App() {

  const album = {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  }

  return (
    <div className="App">
      <ExpenseOne id={album.id} />
      <ExpenseTwo img={album.url} />
      <ExpenseThree title={album.title} />
    </div>
  );
}

export default App;

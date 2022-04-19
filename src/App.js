import './App.css';
import ExpenseForm from './components/ExpenseForm';

function App() {
  let name = {
    date: new Date ()
  }

  return (
    < ExpenseForm date={name.date} />
  );
}

export default App;

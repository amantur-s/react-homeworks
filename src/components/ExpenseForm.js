import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [data, setData] = useState("");
  const [result, setResult] = useState([]);

  function clickHandler(event) {
    setData(event.target.value);
  }

  function submitHandler() {
    if(data.trim() === ''){
      return
    }
    setResult([...result, { date: new Date().toLocaleDateString(), id: Math.random().toString() , text: data}]);
    setData('')
  }

  return (
    <div className="container">
      <label></label>
      <input value={data} onChange={clickHandler} />
      <button onClick={submitHandler}>ADD</button>
      <div>
        {result.map((element) => {
          return (
            <div className="output" key={element.id}>
              <p>{element.date}</p>
              <p>{element.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExpenseForm;

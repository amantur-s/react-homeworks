import { useState } from "react";
import "./Item.css";

function ItemTwo() {
  const [obj, setObj] = useState({});

  function objHandler(event) {
    let updated = {};
    updated = { value: event.target.value };
    setObj((obj) => ({
      ...obj,
      ...updated,
    }));
    console.log(obj);
  }

  return (
    <form>
      <div className="item">
        <label>Input method №2 </label>
        <input onChange={objHandler}></input>
      </div>
    </form>
  );
}

export default ItemTwo;

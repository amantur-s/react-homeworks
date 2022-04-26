import { useState } from "react";
import "./Item.css";

function ItemOne() {
  const [item, setItem] = useState("");

  function sliceHandler(event) {
    setItem(event.target.value);
    console.log(item);
  }
  return (
    <form>
      <div className="item">
        <label>Input method №1 </label>
        <input onChange={sliceHandler}></input>
      </div>
    </form>
  );
}

export default ItemOne;

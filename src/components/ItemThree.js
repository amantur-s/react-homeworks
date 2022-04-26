import { useState } from "react";
import "./Item.css";

function ItemThree() {
  const [list, setList] = useState([]);

  function listHandler(event) {
    setList((prev) => {
      prev = event.target.value;
      return [prev];
    });
    console.log(list);
  }

  return (
    <form>
      <div className="item">
        <label>Input method №3 </label>
        <input onChange={listHandler}></input>
      </div>
    </form>
  );
}

export default ItemThree

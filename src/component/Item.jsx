import { useState, useEffect } from "react";
import "./Item.css";

const Item = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=9")
    .then((res) => {return res.json()
    .then((data) => setData(data));
      }
    );
  }, []);
  return (
    <div className="container">
      {data.map((elem) => {
        return (
          <div className="item">
            <span> {elem.id} </span>
            <div className="box">
              <h4>{elem.title}</h4>
              <p> text </p>
            </div>
            <img src={elem.thumbnailUrl} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Item;

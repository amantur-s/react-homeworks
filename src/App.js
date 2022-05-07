import "./App.css";
import { useEffect, useState, useRef } from "react";

const App = () => {
  const changeRef = useRef("");
  const background = useRef("");
  const [square, setSquare] = useState("");
  const [back, setBack] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (changeRef.current.style.backgroundColor === "red") {
        changeRef.current.style.backgroundColor = "blue";
        setSquare("red");
      } else {
        changeRef.current.style.backgroundColor = "red";
        setSquare("blue");
      }
      if (background.current.style.background === "aqua") {
        background.current.style.background = "coral";
        setBack("aqua");
      } else {
        background.current.style.background = "aqua";
        setBack("coral");
      }
    }, 1000);
  }, [square, back]);

  return (
    <div ref={background} className="cont">
      <div ref={changeRef} className="square">
        {setSquare}
      </div>
    </div>
  );
};

export default App;

import "./App.css";
import React, { useEffect, useState } from "react";

function ChildComponent(props) {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("Auskin");

  useEffect(() => {
    console.log("Obsered");
    if (count % 2 == 0) setName("Auskin and count is even");
    else setName("Auskin and count is odd");
  }, [count]);

  console.log(props);
  return (
    <div>
      <span>Name: {props.Myname}</span> <br />
      <span>Date: {props.updatedAt}</span>
      <br />
      <button
        onClick={() => {
          count += 1; //setCount(count+1)
          setCount(count);
          console.log("click", count);
        }}
      >
        Click me
      </button>
      <div>Counter: {count}</div> <br />
      <div>Name: {name}</div>
    </div>
  );
}

function App() {
  const Myname = "Auskin";
  const updatedAt = new Date();
  return (
    <ChildComponent
      Myname={Myname}
      updatedAt={updatedAt.toLocaleDateString()}
    />
  );
}

export default App;

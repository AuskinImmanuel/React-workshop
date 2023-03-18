import "./App.css";
import React, { useEffect, useState } from "react";

function ChildComponent(props) {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("Auskin");

  useEffect(() => {
    console.log("Obsered");
    if (count % 2 === 0) setName("Auskin and count is even");
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

function Form() {
  const [sname, setsName] = useState("");
  const [age, setAge] = useState(null);
  const onNameChange = (e) => {
    setsName(e.target.value);
  };
  const onAgeChange = (e) => {
    setAge(e.target.value);
  };

  const onSubmit = () => {
    console.log("Name:" + sname);
    console.log("Age: " + age);

    const data = { name: sname, age: age };
    fetch("http://localhost:3600/submit", {
      method: "POST",
      headers: { "Content-Type": "applicaiton/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      name:<input type="text" onChange={onNameChange}></input>
      <br />
      <br />
      Age:<input type="text" onChange={onAgeChange}></input>
      <br />
      <br />
      <button type={"button"} onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

function App() {
  let [res, setRes] = useState("Loading");

  useEffect(() => {
    fetch("http://localhost:3600/test")
      .then((data) => data.text())
      .then((data) => setRes(data));
  });

  const Myname = "Auskin";
  const updatedAt = new Date();
  return (
    <div>
      <ChildComponent
        Myname={Myname}
        updatedAt={updatedAt.toLocaleDateString()}
      />
      <h1>{res}</h1>
      <br />
      <Form />
    </div>
  );
}

export default App;

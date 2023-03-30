import React, { useState } from "react";

const UseState = () => {
  //Increment & Decrement in normal way
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  //Increment & Decrement with object

  const [objCounter, setObjCounter] = useState({ value: 0 });

  const objIncrement = () => {
    setObjCounter((prev) => {
      return {
        value: prev.value + 1,
      };
    });
  };
  const objDecrement = () => {
    setObjCounter((prev) => {
      return {
        value: prev.value - 1,
      };
    });
  };
  //Toggle visible or hide

  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph(!showParagraph);
  };
  return (
    <div style={{ margin: "0 0px", background: "#FCFFE7" }}>
      <h2
        style={{
          margin: "0",
          padding: "10px 0",
          textAlign: "center",
          color: "#2B3467",
        }}
      >
        Use State
      </h2>
      <hr style={{ border: "2px solid gray" }} />
      <div style={{ padding: "30px 0" }}>
        <h3>
          Click the +/- icon to increase/decrease the value
          <span
            style={{ color: "red", marginLeft: "10px" }}
          >{`${counter}`}</span>
        </h3>
        <button
          style={{
            padding: "5px 20px",
            color: "yellow",
            background: "green",
            margin: "2px",
          }}
          onClick={decrement}
        >
          -
        </button>
        <button
          style={{
            padding: "5px 20px",
            color: "yellow",
            background: "red",
            margin: "2px",
          }}
          onClick={increment}
        >
          +
        </button>
      </div>
      <hr />

      <div style={{ padding: "30px 0" }}>
        <h3>
          Click the +/- icon to increase/decrease the object value
          <span
            style={{ color: "red", marginLeft: "10px" }}
          >{`${objCounter.value}`}</span>
        </h3>
        <button
          style={{
            padding: "5px 20px",
            color: "yellow",
            background: "green",
            margin: "2px",
          }}
          onClick={objDecrement}
        >
          -
        </button>
        <button
          style={{
            padding: "5px 20px",
            color: "yellow",
            background: "red",
            margin: "2px",
          }}
          onClick={objIncrement}
        >
          +
        </button>
      </div>
      <hr />
      <div style={{ padding: "30px 0" }}>
        <h3>Click the Button to view/hide the paragraph</h3>
        <button
          style={{
            padding: "10px 20px",
            color: "white",
            background: "purple",
            margin: "2px",
          }}
          onClick={toggleParagraph}
        >
          Show Paragraph
        </button>
        {showParagraph && (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciendis, sapiente. Accusantium dolor amet, sed quibusdam quod
            similique. Soluta quam fuga ipsa laudantium non ratione, labore,
            maiores, eveniet dignissimos aperiam voluptatum.
          </p>
        )}
      </div>
      <hr />

      <div style={{ background: "#2B3467", padding: "10px" }}>
        <h2 style={{ color: "#EB455F" }}>What is useState()</h2>
        <p style={{ color: "#FCFFE7", fontWeight: "400" }}>
          useState is a built-in hook that allows functional components to
          manage state. The useState hook returns an array with two elements:
          the first element is the current state value, and the second element
          is a function to update the state value.
        </p>
        <h2 style={{ color: "#EB455F" }}>Why useState()</h2>
        <p style={{ color: "#FCFFE7", fontWeight: "400" }}>
          Functional components are a simpler and more lightweight alternative
          to class components. However, functional components lacked a way to
          manage state before the introduction of hooks, which made it difficult
          to create dynamic and interactive UIs. The useState hook was
          introduced as a solution to this problem. It allows functional
          components to declare and manage state without the need for class
          components and setState.
        </p>
        <ul style={{ color: "#FCFFE7", fontWeight: "400" }}>
          <h3 style={{ color: "#BAD7E9" }}>
            Here are some benefits of using the useState hook:
          </h3>
          <li>
            <strong style={{ color: "#EB455F" }}>Simpler code:</strong> With useState, you don't have to
            write a lot of boilerplate code to create a class component, define
            a constructor, or use setState to manage state.
          </li>
          <li>
            <strong style={{ color: "#EB455F" }}>Easier to reason about:</strong> Because functional
            components are simpler than class components, they're easier to
            understand and reason about. useState makes it even easier to manage
            state within functional components.
          </li>
          <li>
            <strong style={{ color: "#EB455F" }}>More lightweight:</strong> Functional components are
            generally more lightweight and faster than class components, which
            can be important for performance-sensitive applications.
          </li>
          <li>
            <strong style={{ color: "#EB455F" }}>Functional programming model:</strong> Hooks are part of
            React's functional programming model, which emphasizes immutability
            and pure functions. This makes it easier to write code that is
            easier to understand, test, and maintain.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseState;

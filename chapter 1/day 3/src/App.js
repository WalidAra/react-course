import React, { useReducer, useState } from "react";

const initState = { count: 0 };

const Reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(Reducer, initState);

  const [first, setfirst] = useState(initState);

  const Addone = () => {};
  const removeOne = () => {};
  const reset = () => {};

  return (
    <div>
      <p> {state.count} </p>

      <button
        onClick={() => dispatch({ type: "increment" })}
        className="py-2 px-4 rounded-md bg-purple-600 text-white"
      >
        {" "}
        add{" "}
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="py-2 px-4 rounded-md bg-purple-600 text-white"
      >
        {" "}
        sub
      </button>
    </div>
  );
}

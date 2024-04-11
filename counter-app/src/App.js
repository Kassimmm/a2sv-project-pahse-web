import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default function CounterApp() {
  // useState Hook: Declares a state variable 'count' and a setter function 'setCount'
  const [count, setCount] = useState(0);

  // useEffect Hook: Updates the document title with the current count value
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Only re-run the effect if 'count' changes

  // useRef Hook: Creates a reference to the increment button DOM element
  const incrementButtonRef = useRef(null);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* Accessing the ref with 'ref' attribute */}
      <button ref={incrementButtonRef} onClick={incrementCount}>
        Increment
      </button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

// Render the CounterApp component to the DOM
ReactDOM.render(<CounterApp />, document.getElementById('root'));

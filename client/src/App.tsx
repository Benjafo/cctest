import { useState } from 'react'
// Test comment to trigger hooks
// Another test edit
// Testing hooks again
// Yet another edit to test hooks
// Testing revamped hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  var badVar = "This is a bad variable";
  console.log("Debug message"); // violates no-console
  const unusedVariable = 42; // violates no-unused-vars

  // violates prefer-const
  let shouldBeConst = "I won't be reassigned";

  // violates eqeqeq
  if (count == 0) {
    console.log("Count is zero");
  }

  // violates no-nested-ternary and prefer-template
  const message = count > 10 ? "High" : count > 5 ? "Medium" : "Low" + count;

  // more violations for testing
  debugger; // violates no-debugger
  const test = count === 5 ? true : false; // violates no-unneeded-ternary

  // violates prefer-arrow-callback
  const numbers = [1, 2, 3].map(function (n) {
    return n * 2;
  });

  // violates object-shorthand
  const obj = {
    count: count,
    message: message
  };

  // violates arrow-body-style
  const doNothing = () => {
    return;
  };

  // violates no-throw-literal
  if (count > 100) {
    throw "Count too high!";
  }

  // testing hooks with perms fix
  const anotherTest = "hooks should run now";

  // testing updated smart-lint.sh with package.json detection

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

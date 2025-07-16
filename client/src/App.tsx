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

  // Adding new ESLint violations to test the updated hook
  // Another violation test
  var badVariable = "this should be const"; // violates no-var
  console.log("Testing updated linter"); // violates no-console
  debugger; // violates no-debugger
  const unused = 42; // violates no-unused-vars
  
  if (count == 0) { // violates eqeqeq
    console.log("Count is zero");
  }

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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TestPage from './TestPage'
import LoginPage from './LoginPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'test' | 'login'>('home')

  const renderPage = () => {
    if (currentPage === 'test') {
      return <TestPage />
    }
    
    if (currentPage === 'login') {
      return <LoginPage />
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

  return (
    <>
      <nav style={{ 
        padding: '10px', 
        borderBottom: '1px solid #ccc',
        marginBottom: '20px'
      }}>
        <button 
          onClick={() => setCurrentPage('home')}
          style={{
            marginRight: '10px',
            padding: '8px 16px',
            backgroundColor: currentPage === 'home' ? '#007bff' : '#f8f9fa',
            color: currentPage === 'home' ? 'white' : '#333',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentPage('test')}
          style={{
            padding: '8px 16px',
            backgroundColor: currentPage === 'test' ? '#007bff' : '#f8f9fa',
            color: currentPage === 'test' ? 'white' : '#333',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Test Page
        </button>
      </nav>
      
      {renderPage()}
    </>
  )
}

export default App

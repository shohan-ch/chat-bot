import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h3>Chat Application</h3>
      <div className="chatbox">
       <div className="sidebar">

       </div>
       <div className="content">
         <div className="content-header"></div>
         <div className="content-body"></div>
         <div className="footer"></div>
       </div>
      </div>

    </div>
  )
}

export default App

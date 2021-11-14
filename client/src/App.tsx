import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <div className="chatbox">
       <div className="sidebar">

         <div className="sidebar-header">
         <h3>Chat Application</h3>
         </div>

         <div className="contacts">
           <div className="contact" style={{display:'flex',alignItems:'center'}}>
             {/* avatar || name || last time */}
             <div className="avatar">
               <img src={logo} width="30" style={{borderRadius:"50%"}} alt=""  />
             </div>
             <div className="title">
                Tareq Hossain
             </div>
             <div className="time"></div>
           </div>
         </div>

       </div>
       <div className="content">
         <div className="content-header">
         <h3>Me</h3>
         </div>
         <div className="content-body">
           content body
         </div>
         <div className="content-footer">
           content footer
         </div>
       </div>
      </div>

    </div>
  )
}

export default App

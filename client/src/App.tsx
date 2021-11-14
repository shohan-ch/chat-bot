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
               <img src={logo} height="30" style={{borderRadius:"50%"}} alt=""  />
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
         <div className="avatar">
               <img src={logo} height="30" style={{borderRadius:"50%"}} alt=""  />
             </div>
             <div className="title">
                Tareq Hossain
                <br />
                <small>
                  Last seen: 20min ago
                </small>
             </div>
            
         </div>
         <div className="content-body">

           <div className="left">
             Hello how are you doing?
           </div>
           <div className="right">
            Hi. I'm fine how are you
           </div>
           <div className="left">
             yeah finen. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet molestias ullam ipsum, eius dignissimos incidunt tempora nam excepturi? Eum beatae corrupti vitae quod porro suscipit esse sequi quas? Similique, quia!
           </div>
           <div className="right">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis dolor ipsum deleniti ullam officiis ad nobis quidem nesciunt odit ipsa, aliquid voluptatum temporibus? Harum qui maiores amet earum, pariatur neque.
           </div>

           <div className="left">
            how are you
           </div>
           <div className="right">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis dolor ipsum deleniti ullam officiis ad nobis quidem nesciunt odit ipsa, aliquid voluptatum temporibus? Harum qui maiores amet earum, pariatur neque.
           </div>
           <div className="right">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis dolor ipsum deleniti ullam officiis ad nobis quidem nesciunt odit ipsa, aliquid voluptatum temporibus? Harum qui maiores amet earum, pariatur neque.
           </div>

           <div className="left">
             yeah finen. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet molestias ullam ipsum, eius dignissimos incidunt tempora nam excepturi? Eum beatae corrupti vitae quod porro suscipit esse sequi quas? Similique, quia!
           </div>
           
         </div>
         <div className="content-footer">
            <input type="text" className="txt" />
            <button>Send</button>
         </div>
       </div>
      </div>

    </div>
  )
}

export default App

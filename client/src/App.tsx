import { useState } from 'react'
import logo from './logo.svg'
import { AiOutlineSend } from "react-icons/ai";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <div className="chatbox">
       <div className="sidebar">

         <div className="sidebar-header">
              Chat Application
         </div>

         <div className="contacts">
           <div className="contact">
             {/* avatar || name || last time */}
             <div className="avatar">
               <img src={logo} height="30" style={{borderRadius:"50%"}} alt=""  />
             </div>
             <div className="avatar-right" style={{flex:'auto',paddingRight:'10px'}}> 
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <div className="title">
                    Elizabeth Olsen
                  </div>
                  <div className="small">
                    <small>3.30pm</small>
                </div>
              </div>
               
              <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                  <div className="small mgs" style={{color:'gray'}}>
                    hello how are you...
                  </div>
                  <div className="small">
                    <span style={{backgroundColor:"green",padding:'3px 8px'}}>
                      1
                    </span>
                </div>
                </div>
               
             </div>

           </div>
           <div className="contact active">
             {/* avatar || name || last time */}
             <div className="avatar">
               <img src={logo} height="30" style={{borderRadius:"50%"}} alt=""  />
             </div>
             <div className="avatar-right" style={{flex:'auto',paddingRight:'10px'}}> 
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <div className="title">
                     Kiren Gillan
                  </div>
                  <div className="small">
                    <small>now</small>
                </div>
              </div>
               
              <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                  <div className="small mgs" style={{color:'gray'}}>
                    what is the best way...
                  </div>
                  <div className="small">
                    <span style={{backgroundColor:"green",padding:'3px 8px'}}>
                      3
                    </span>
                </div>
                </div>
               
             </div>

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
            <button>
            Send <AiOutlineSend/> 
            </button>
         </div>
       </div>
      </div>

    </div>
  )
}

export default App

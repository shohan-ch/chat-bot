import { useEffect, useState } from 'react'
import logo from './logo.svg'
import { AiOutlineSend } from "react-icons/ai";
import { BsCheck2, BsCheck2All } from 'react-icons/bs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(()=>{
    
    initChat()
  },['initChat'])

  const initChat = ()=>{
    const d = document.querySelector("#contentBody")
    if(d !== null){
      d.scrollTop= d.scrollHeight;
    }
   
  }

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
             <div className="avatar-right" style={{flex:'auto',paddingRight:'8px'}}> 
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <div className="title">
                    Elizabeth Olsen
                  </div>
                  <div className="small">
                    <small>3.30pm</small>
                </div>
              </div>
               
              <div style={{display:'flex',justifyContent:'space-between',marginTop:'8px'}}>
                  <div className="small mgs" style={{color:'gray'}}>
                    hello how are you...
                  </div>
                  <div className="small">
                    <span className="badge-success">
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
                    <span className="badge-success">
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
         <div className="content-body" id="contentBody">

           <div className="left">
             <div className="msg-top">
               Hello how are you
             </div>

             <div className="mgs-time"
             style={{
               fontSize:'10px',
               float:'right'
             }}
             >
                2.32pm
             </div>
           </div>
           <div className="right" >
           <div className="msg-top" style={{minWidth:'30%'}}>
              Hi i'm fine 
             </div>
            <div className="mgs-time"
             style={{
              
               display:'flex',
               alignItems:'center',
               justifyContent:'flex-end'
               
             }}
             >
                 <span style={{fontSize:'12px', color:'lightgray'}}>3.32 PM</span>
                 <BsCheck2 style={{color:'lightgray'}}/>
                 <BsCheck2All style={{color:'lightgray'}}/>
                 <BsCheck2All style={{color:'skyblue'}}/>
        
             </div>
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
            <input type="text" className="txt" placeholder="type here ..." />
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

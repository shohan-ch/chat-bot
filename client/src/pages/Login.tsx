import { FC, MouseEventHandler, useState } from "react";



export const Login:FC<{getLogin:Function}> = ({getLogin})=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const doLogin = (e:any)=>{
        e.preventDefault()
        if(username !== "" && password !== ""){
            localStorage.setItem('username',username)
           getLogin(true)
        }else{
            window.alert("username is required!")
        }
        
    }


    return (
        <div>
            <form method="post" onSubmit={doLogin} style={{backgroundColor:'#2c2f34', padding:'10px', position:'relative', border:'1px solid gray',width:'350px'}}>
                <h3 style={{margin:'0'}}>Login Area</h3>
                <hr />
                <div className="form-control">
                    <input style={{padding:'5px',width:'96%'}} type="text" name="username" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
                </div>
                <div className="form-control">
              
                    <input style={{padding:'5px',width:'96%'}} type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                </div>
                <div className="form-control" style={{display:'flex',margin:'10px 0',justifyContent:'space-between',alignItems:'center'}}>
                    <label htmlFor="">
                        <input type="checkbox" /> Remember Me
                    </label>
                    <a style={{fontSize:'small',color:'skyblue'}} href="#">Forgot Password?</a>
                </div>
                <div className="form-control">
                    <button type="submit" style={{cursor:'pointer',color:'white',padding:'5px',width:'100%', backgroundColor:'indigo',border:'1px solid indigo'}}>Login</button>
                </div>
            </form>
        </div>
    )
}
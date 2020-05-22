import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

const SignUp = () => {

    const history = useHistory();
    const[name,setName] = useState("");
    const[password,setPassword] = useState("");
    const[email,setEmail] = useState("");

    const PostData=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid Email!",classes:"#b71c1c red darken-4"})
            return
        } 
            fetch("/signup",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    email:email,
                    password:password
                })
            }).then(res=>res.json())
                .then(data=>{if(data.error){
                    M.toast({html: data.error,classes:"#b71c1c red darken-4"})
                    } 
                    else {
                        M.toast({html:data.message,classes:"#64dd17 light-green accent-4"})
                        history.push("/signin")
                    }
                }).catch(error=>{
                    console.log(error)
                })
        

// Have to remove https:localhost:5000 from fetch() due to CORS error
//add proxy to package.json under main object header
//proxys forward to wherver we want to send requests
    }
    return (
        <>
            <div className="my-card">
                <div className="card auth-card input-field">
                    <h2 className="auth-title">FotoStory</h2>
                    <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                    <input
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <button onClick={()=>{PostData()}}className="waves-effect waves-light btn red lighten-1">Sign Up</button>
                    <h5>
                        <Link to="signin">
                            Already have an account?
                        </Link>
                    </h5>
                </div>
            </div>
        </>
    )
}

export default SignUp
import React, {useState, useEffect} from 'react';
import {getUserFromBackend} from '../actions/api';
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";


function LoginForm(props) {

/*
    const dispatch = useDispatch();
    

   useEffect(() => {

    dispatch(getUserFromBackend());

   },[])
   */



   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [message, setMessage] = useState("");

   const [successful, setSuccessful] = useState(false);
  
 
   const onChangeUsername = (e) => {
     const username = e.target.value;
     setUsername(username);
     
   };

   const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
 

  const clickHandler = () => {
    try {
        // await dispatch(action)
        props.history.push('/toDo')  // redirects
    } catch (err) {
        props.history.push('/errorpage')  // redirects
    }
}

  return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputusername">username </label>
                <input type="username" 
                       className="form-control" 
                       id="username" 
                       aria-describedby="usernameHelp" 
                       placeholder="Enter username"
                       value={username}
                       required
                       onChange={onChangeUsername}
                       
                />
                
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        required
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>

             
                <button onClick={clickHandler} >
                   
                
                   
                
                    Log in
                </button>
            </form>
        </div>
    )
}

export default LoginForm;
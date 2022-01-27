import React, { useState, useEffect } from "react";
import { getUserFromBackend } from "../actions/api";
import { useDispatch } from "react-redux";
import { useNavigate, Link  } from "react-router-dom";
import { RegistrationForm } from "../components/RegistrationForm";

function LoginForm(props) {
  /*
    const dispatch = useDispatch();
    

   useEffect(() => {

    dispatch(getUserFromBackend());

   },[])
   */
  
  let navigate = useNavigate();

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
  




    var conditie = true;

    if (username !== "" && password !== "") {
      conditie = false;
      navigate("/toDo");
      
    }

    return conditie;
  };

  useEffect(
    function () {
      setUsername(username);
      setPassword(password);
     
  
    },
    [username, password]
  );

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputusername">username </label>
          <input
            type="username"
            className="form-control"
            id="username"
            aria-describedby="usernameHelp"
            placeholder="Enter username"
            value={username}
            required
            // onChange={onChangeUsername}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            required
            value={password}
            //  onChange={onChangePassword}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button onClick={clickHandler  } >Log in</button>
        <Link to={`/register`}>
          <button role="link">Sign up</button>
        </Link>
  
      </form>
    </div>
  );
}

export default LoginForm;

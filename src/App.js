import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import {Provider} from "react-redux";
import DEmployees from './components/DEmployees';
import LoginForm from './components/LoginForm';

import RegistrationForm from './components/RegistrationForm';



function App() {

  const [user, setUser] = useState({name:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
   
<div className="App">
    <RegistrationForm/ >
    <LoginForm/>
</div>

  );
}

export default App;

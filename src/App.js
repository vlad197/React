import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import {Provider} from "react-redux";
import DEmployees from './components/DEmployees';
import LoginForm from './components/LoginForm';

import RegistrationForm from './components/RegistrationForm';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import getUserFromBackend, { users } from './actions/api';
import {createStore, combineReducers} from 'redux';
import { Navigate } from 'react-router-dom';
function App() {

  const [error, setError] = useState("");


  
// de facut router cu react-router-dom
  return (

    

   
<div className="App">
  
    <BrowserRouter>
    <Routes>
    
    <Route exact path="/login" element={<LoginForm />} error={error} />
    <Route
        path="/"
        element={     <Navigate to="/login" />}
    />
    

      <Route exact path='/register' element={<RegistrationForm/>} />
    </Routes>
    </BrowserRouter>
</div>

  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import {Provider} from "react-redux";
import DEmployees from './components/DEmployees';

function App() {
  return (
    <Provider store ={store}>
      <DEmployees/>
    </Provider>,
    document.getElementById('root')

  );
}

export default App;

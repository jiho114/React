import Greeting from './Greeting'
import './App.css';
import {useState} from 'react'
import ToggleSwitch from './ToggleSwitch'
import Selectform from './Selectform'
import Student from './Student'

function App() {
  return (
    <>
    <Greeting/>
    <ToggleSwitch></ToggleSwitch>
    <Selectform></Selectform>
    <br></br>
    <Student></Student>
    </>
  );
}

export default App;

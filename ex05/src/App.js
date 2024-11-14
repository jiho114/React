
import './App.css';
import Counter from './Counter'
import React, {useState} from 'react'
import Lifecycle from './Lifecycle'
import Timer from './Timer'
import SyncedInputs from './SyncedInputs'

function App() {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true)
  const [visible3, setVisible3] = useState(true)
  return (
    <div className='App'>
      <h1>App</h1>
      <input type='checkbox' checked={visible} style={{height: 20, width: 20, marginBottom:20}} onChange={e => setVisible(e.target.checked)}></input>
      {visible ? <Counter></Counter> : null}
      <input type='checkbox' checked={visible2} onChange={e => setVisible2(e.target.checked)}></input>
      {visible2 ? <Lifecycle></Lifecycle> : null}
      <input type='checkbox' checked={visible3} onChange={e => setVisible3(e.target.checked)}></input>
      {visible3 ? <Timer></Timer> : null}
      <SyncedInputs></SyncedInputs>
    </div>
  );
}
export default App;

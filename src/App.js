import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0);
  return (
    <>
    <div>
  
      Number State : {number}
    </div>
    <button onClick={()=>{
      setNumber(number+1)
    }}>누르면 up</button>
  </>
  );
}

export default App;

// 원래는 useState가 return하는 값이 배열이다. 
// 그배열을 구조분해 할당으로 받은 것 뿐이다.
// const [state, setState] = useState(초기값);